/* eslint-disable no-nested-ternary */
import type {
  JSONSchema7,
  JSONSchema7Definition,
  JSONSchema7TypeName,
} from 'json-schema';
import type {
  ArgTypes,
  Args,
  DecoratorFunction,
  InputType,
  SBType,
} from '@storybook/types';
import type { ReactRenderer } from '@storybook/react';

const definitionIsSchema = (
  schema: JSONSchema7Definition | JSONSchema7Definition[]
): schema is JSONSchema7 =>
  !Array.isArray(schema) && typeof schema !== 'boolean';

const getTypeName = (
  schemaType: JSONSchema7TypeName | JSONSchema7TypeName[]
) => {
  const typeName = Array.isArray(schemaType) ? schemaType[0] : schemaType;
  switch (typeName) {
    case 'null':
      return 'object';
    case 'integer':
      return 'number';
    default:
      return typeName;
  }
};

const getArgsShared = (
  initialSchema: JSONSchema7
): { argTypes: ArgTypes; args: Args } => {
  const argTypes: ArgTypes = {};
  const args: Args = {};

  const getArgTypes = (
    schema: JSONSchema7,
    name?: string,
    category?: string,
    subcategory?: string,
    required?: boolean,
    defaultValue = schema.default,
    example = schema.examples?.[0]
  ) => {
    if ('const' in schema) return;

    const add = (typeProps: InputType) => {
      argTypes[name] = {
        name,
        description: `**${schema.title}${schema.description ? ':' : ''}**${
          schema.description ? `\n\n${schema.description}` : ''
        }`,
        type: {
          required,
          name: getTypeName(schema.type),
        } as SBType,
        table: {
          category: category ?? 'general',
          defaultValue: { summary: defaultValue },
          subcategory,
        },
        ...typeProps,
      };
      args[name] = example ?? defaultValue;
    };

    switch (schema.type) {
      case 'string':
        add({
          options:
            schema.enum && schema.enum.length > 0 ? schema.enum : undefined,
          control:
            schema.enum && schema.enum.length > 0
              ? {
                  type: schema.enum.length > 5 ? 'select' : 'inline-radio',
                }
              : schema.format
              ? schema.format === 'color'
                ? 'color'
                : schema.format === 'date'
                ? 'date'
                : 'text'
              : 'text',
        });
        break;

      case 'boolean':
        add({
          control: 'boolean',
        });
        break;

      case 'integer':
      case 'number':
        add({
          control: {
            type:
              typeof schema.minimum === 'number' &&
              typeof schema.maximum === 'number'
                ? 'range'
                : 'number',
            min: schema.minimum,
            max: schema.maximum,
          },
        });
        break;

      case 'object':
        if (schema.properties) {
          const cat = category ?? name;
          Object.entries(schema.properties).forEach(
            ([propName, propSchema]) => {
              if (definitionIsSchema(propSchema)) {
                const subcat =
                  cat &&
                  (subcategory ||
                    ((propSchema.type === 'object' ||
                      propSchema.type === 'array') &&
                      `${name}.${propName}`));
                getArgTypes(
                  propSchema,
                  name ? `${name}.${propName}` : propName,
                  cat,
                  subcat,
                  schema.required?.includes(propName),
                  defaultValue?.[propName] ?? schema.default?.[propName],
                  example?.[propName] ?? schema.examples?.[0][propName]
                );
              }
            }
          );
        } else {
          add({
            control: 'object',
          });
        }
        break;

      case 'array':
        if (
          schema.items &&
          definitionIsSchema(schema.items) &&
          schema.items.type
        ) {
          const cat = category ?? name;
          const examples = example ?? schema.examples?.[0] ?? defaultValue;
          const count = examples?.length ?? 3;
          new Array(count).fill(0).forEach((_, index) => {
            if (definitionIsSchema(schema.items)) {
              const subcat =
                cat &&
                (subcategory ||
                  ((schema.items.type === 'object' ||
                    schema.items.type === 'array') &&
                    `${name}.${index}`));
              getArgTypes(
                schema.items,
                name ? `${name}.${index}` : String(index),
                cat,
                subcat,
                undefined,
                defaultValue?.[index] ?? schema.default?.[index],
                examples?.[index]
              );
            }
          });
        } else {
          add({
            control: 'object',
          });
        }
        break;

      default:
        break;
    }
  };
  getArgTypes(initialSchema);

  return { argTypes, args };
};

const unpack = (flatArgs: Args): Args => {
  const args: Args = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(flatArgs)) {
    key.split('.').reduce((prev, curr, i, arr) => {
      if (prev[curr] == null) {
        const next = arr[i + 1];
        prev[curr] = next != null ? (Number.isNaN(+next) ? {} : []) : value;
      }
      return prev[curr];
    }, args);
  }

  return args;
};

const unpackDecorator: DecoratorFunction<ReactRenderer, Args> = (
  story,
  config
) => story({ ...config, args: unpack(config.args) });

const isObject = (obj: unknown): obj is Record<string, unknown> =>
  Object.prototype.toString.call(obj) === '[object Object]';

const pack = (obj: Record<string, unknown> | unknown[]): Args =>
  Object.entries(obj).reduce((prev, [key, value]) => {
    if (isObject(value) || Array.isArray(value)) {
      Object.entries(pack(value)).forEach(([key2, value2]) => {
        prev[`${key}.${key2}`] = value2;
      });
    } else {
      prev[key] = value;
    }
    return prev;
  }, {});

export { unpack, unpackDecorator, pack, getArgsShared };
