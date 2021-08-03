/* eslint-disable no-nested-ternary */
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
    const add = (typeProps) => {
      argTypes[name] = {
        name,
        description: `**${schema.title}:**\n\n${schema.description}`,
        type: {
          required,
          summary: schema.type,
        },
        table: {
          category: category ?? 'general',
          defaultValue: { summary: defaultValue ?? schema.default },
          subcategory,
        },
        ...typeProps,
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
                  ((propSchema.type === 'object' ||
                    propSchema.type === 'array') &&
                    `${name}.${propName}`));
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
          const count = defaultValue?.length ?? schema?.default?.length ?? 3;
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
              defaultValue?.[index] ?? schema?.default?.[index]
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

module.exports = { getArgsShared };
