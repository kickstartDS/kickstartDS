/* eslint-disable no-nested-ternary */
const getArgsShared = (initialSchema) => {
  const argTypes = {};
  const args = {};

  const getArgTypes = (
    schema,
    name,
    category,
    subcategory,
    required,
    defaultValue = schema.default,
    example = schema.examples?.[0],
    conditional = false,
    condition = ''
  ) => {
    if ('const' in schema) return;

    let localCondition = '';

    const add = (typeProps) => {
      argTypes[name] = {
        name,
        description: `**${schema.title}${schema.description ? ':' : ''}**${
          schema.description ? `\n\n${schema.description}` : ''
        }`,
        type: {
          required,
          summary: schema.type,
        },
        table: {
          category: category ?? 'general',
          defaultValue: { summary: defaultValue },
          subcategory,
        },
        if: condition &&
          condition.length > 0 && {
            arg: condition,
          },
        ...typeProps,
      };
      args[name] = example ?? defaultValue;
    };

    if (conditional === true) {
      argTypes[`${name}.active`] = {
        name: `${name}.active`,
        description: `**${schema.title}${schema.description ? ':' : ''}**${
          schema.description ? `\n\n${schema.description}` : ''
        }`,
        type: {
          required,
          summary: schema.type,
        },
        table: {
          category: category ?? 'general',
          defaultValue: { summary: defaultValue },
          subcategory,
        },
      };

      args[`${name}.active`] = false;
      localCondition = `${name}.active`;
    }

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
                false,
                condition || localCondition
              );
            }
          );
        } else {
          add({
            control: 'object',
          });
        }
        break;

      case 'array':
        if (schema.items && schema.items.type) {
          const cat = category ?? name;
          // const examples = example ?? schema.examples?.[0] ?? defaultValue;
          const { examples } = schema;
          const count = schema.maximum ?? examples?.length ?? 3;
          new Array(count).fill().forEach((_, index) => {
            const subcat =
              cat &&
              (subcategory ||
                ((schema.items.type === 'object' ||
                  schema.items.type === 'array') &&
                  `${name}.${index}`));
            getArgTypes(
              schema.items,
              name ? `${name}.${index}` : index,
              cat,
              subcat,
              undefined,
              // defaultValue?.[index] ?? schema.default?.[index],
              defaultValue?.[index] ?? schema.default?.[index],
              examples[index],
              true
            );
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

const unpack = (flatArgs) => {
  const args = {};

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

const unpackDecorator = (story, config) =>
  story({ ...config, args: unpack(config.args) });

const isObject = (obj) =>
  Object.prototype.toString.call(obj) === '[object Object]';

const pack = (obj) =>
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
