/* eslint-disable no-nested-ternary */
const getArgsShared = (initialSchema) => {
  const argTypes = {};
  const defaultArgs = {};

  const getArgTypes = (schema, name, category, subcategory, defaultValue) => {
    const add = (types) => {
      argTypes[name] = {
        name,
        description: `**${schema.title}:**\n\n${schema.description}`,
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
                defaultValue?.[propName] ?? schema.default
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

module.exports = { getArgsShared };
