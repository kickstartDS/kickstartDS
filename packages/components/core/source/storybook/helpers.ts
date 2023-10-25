/* eslint-disable no-nested-ternary */
import type {
  JSONSchema7,
  JSONSchema7Definition,
  JSONSchema7TypeName,
} from 'json-schema';
import type {
  ArgTypes,
  Args,
  Conditional,
  DecoratorFunction,
  InputType,
  SBType,
} from '@storybook/types';
import type { ReactRenderer } from '@storybook/react';

const definitionIsSchema = (
  schema: JSONSchema7Definition | JSONSchema7Definition[]
): schema is JSONSchema7 =>
  !Array.isArray(schema) && typeof schema !== 'boolean';

const getTypeName = (schemaType: JSONSchema7TypeName) => {
  switch (schemaType) {
    case 'null':
      return 'object';
    case 'integer':
      return 'number';
    default:
      return schemaType;
  }
};

const getArgsShared = (
  initialSchema: JSONSchema7
): { argTypes: ArgTypes; args: Args } => {
  const argTypes: ArgTypes = {};
  const args: Args = {};

  const hideArgType = (name: string) => {
    argTypes[name] = { table: { disable: true } };
  };
  const getArgTypes = (
    schema: JSONSchema7,
    name?: string,
    category?: string,
    subcategory?: string,
    required?: boolean,
    defaultValue = schema.default,
    example = schema.examples?.[0],
    condition?: Conditional & { gt?: number }
  ) => {
    if ('const' in schema) return;
    if (defaultValue == null) defaultValue = undefined;

    const schemaType = Array.isArray(schema.type)
      ? schema.type[0]
      : schema.type;

    const add = (typeProps: InputType) => {
      if (!name) return;

      argTypes[name] = {
        name: name.replace(/__/, '.'),
        description: schema.title
          ? `**${schema.title}${schema.description ? ':' : ''}**${
              schema.description ? `\n\n${schema.description}` : ''
            }`
          : undefined,
        type: {
          required,
          name: getTypeName(schemaType),
        } as SBType,
        table: {
          category: category ?? 'general',
          defaultValue: { summary: defaultValue },
          subcategory,
        },
        if: condition,
        ...typeProps,
      };
      const arg = example ?? defaultValue;
      if (arg != null) args[name] = arg;
    };

    switch (schemaType) {
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
          hideArgType(name);

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
                  example?.[propName] ?? schema.examples?.[0][propName],
                  condition
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
          hideArgType(name);

          const cat = category ?? name;
          const examples = example ?? schema.examples?.[0] ?? defaultValue;
          const countValue = examples?.length ?? 3;
          const countMin = schema.minItems || 0;
          const countMax = Math.max(countValue, schema.maxItems || 10);
          const countName = `${name}__count`;

          if (countMin === countMax) {
            hideArgType(countName);
          } else {
            getArgTypes(
              {
                type: 'integer',
                title: countName,
                minimum: countMin,
                maximum: countMax,
              },
              countName,
              cat,
              subcategory,
              undefined,
              countValue
            );
          }

          for (let index = 0; index < countMax; index++) {
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
              defaultValue?.[index % countValue] ??
                schema.default?.[index % countValue],
              examples?.[index % countValue],
              { arg: countName, gt: index }
            );
          }
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
  const arrayCounts: Record<string, number> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(flatArgs)) {
    if (key.endsWith('__count')) {
      const [arrayKey] = key.split('__count');
      arrayCounts[arrayKey] = value;
    } else {
      key.split('.').reduce((prev, currKey, i, arr) => {
        if (prev[currKey] == null) {
          if (Array.isArray(prev)) {
            const prevPath = arr.slice(0, i).join('.');
            const arrayCount = arrayCounts[prevPath];
            const currIndex = +currKey;

            if (
              isNaN(currIndex) ||
              isNaN(arrayCount) ||
              currIndex >= arrayCount
            ) {
              arr.splice(i);
              return prev;
            }
          }

          const nextKey = arr[i + 1];
          prev[currKey] = nextKey != null ? (isNaN(+nextKey) ? {} : []) : value;
        }
        return prev[currKey];
      }, args);
    }
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
    const valueIsArray = Array.isArray(value);
    if (valueIsArray) {
      prev[`${key}__count`] = value.length;
    }
    if (isObject(value) || valueIsArray) {
      Object.entries(pack(value)).forEach(([key2, value2]) => {
        prev[`${key}.${key2}`] = value2;
      });
    } else {
      prev[key] = value;
    }
    return prev;
  }, {});

export { unpack, unpackDecorator, pack, getArgsShared };
