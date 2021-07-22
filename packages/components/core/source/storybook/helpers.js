/* eslint-disable no-nested-ternary, no-console */
const getArgsShared = (initialSchema) => {
  const argTypes = {};
  const defaultArgs = {};

  const getArgTypes = (
    schema,
    name,
    category,
    subcategory,
    defaultValue,
    required
  ) => {
    const add = (types) => {
      argTypes[name] = {
        name,
        description: `**${schema.title}:**\n\n${schema.description}`,
        type: { required },
        table: {
          category: category ?? 'general',
          defaultValue: { summary: defaultValue ?? schema.default },
          subcategory,
          type: { summary: schema.type },
        },
        ...types,
      };
      defaultArgs[name] = defaultValue ?? schema.default;
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
              const subcat =
                cat &&
                (subcategory ||
                  (propSchema.type === 'object' && `${name}.${propName}`));
              getArgTypes(
                propSchema,
                name ? `${name}.${propName}` : propName,
                cat,
                subcat,
                defaultValue?.[propName] ?? schema.default,
                schema.required?.includes(propName)
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
          const count = schema?.default?.length ?? 3;
          new Array(count).fill().forEach((_, index) => {
            const subcat =
              cat &&
              (subcategory ||
                (schema.items.type === 'object' && `${name}.${index}`));
            getArgTypes(
              schema.items,
              name ? `${name}.${index}` : index,
              cat,
              subcat,
              schema?.default?.[index]
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

  return { argTypes, defaultArgs };
};

const unpack = (flatArgs) => {
  const args = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(flatArgs)) {
    key.split('.').reduce((prev, curr, i, arr) => {
      prev[curr] =
        prev[curr] ||
        (arr[i + 1] != null ? (Number.isNaN(arr[i + 1]) ? {} : []) : value);
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
