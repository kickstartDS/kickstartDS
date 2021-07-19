/* eslint-disable no-nested-ternary, no-console */
const getArgsShared = (properties = {}, group = 'general', subgroup) => {
  const argTypes = {};
  const defaultArgs = {};

  Object.entries(properties).forEach(([propertyName, propertySchema]) => {
    switch (propertySchema.type) {
      case 'string':
        argTypes[propertyName] = {
          ...argTypes[propertyName],
          options:
            propertySchema.enum && propertySchema.enum.length > 0
              ? propertySchema.enum
              : undefined,
          control:
            propertySchema.enum && propertySchema.enum.length > 0
              ? {
                  type:
                    propertySchema.enum.length > 5 ? 'select' : 'inline-radio',
                }
              : propertySchema.format
              ? propertySchema.format === 'color'
                ? 'color'
                : propertySchema.format === 'date'
                ? 'date'
                : 'text'
              : 'text',
          name: group === 'general' ? propertyName : `${group}.${propertyName}`,
          description: `**${propertySchema.title}:**\n\n${propertySchema.description}`,
          table: {
            category: group,
            defaultValue: { summary: propertySchema.default },
            subcategory: subgroup || undefined,
          },
        };

        defaultArgs[propertyName] = propertySchema.default;

        break;

      case 'boolean':
        argTypes[propertyName] = {
          control: 'boolean',
          name: group === 'general' ? propertyName : `${group}.${propertyName}`,
          description: `**${propertySchema.title}:**\n\n${propertySchema.description}`,
          table: {
            category: group,
            defaultValue: { summary: propertySchema.default },
            subcategory: subgroup || undefined,
          },
        };

        defaultArgs[propertyName] = propertySchema.default;

        break;

      case 'object':
        if (propertySchema.properties) {
          const sharedArgs = getArgsShared(
            propertySchema.properties,
            group === 'general' ? propertyName : group,
            group === 'general' ? '' : `${group}.${propertyName}`
          );

          Object.entries(sharedArgs.argTypes).forEach(([argName, argType]) => {
            argTypes[`${propertyName}.${argName}`] = argType;
          });

          argTypes[propertyName] = {
            table: { disable: true },
            control: { disable: true },
          };

          Object.entries(sharedArgs.defaultArgs).forEach(([argName, arg]) => {
            defaultArgs[`${propertyName}.${argName}`] = arg;
          });
        } else {
          argTypes[propertyName] = {
            control: 'object',
            name:
              group === 'general' ? propertyName : `${group}.${propertyName}`,
            description: `**${propertySchema.title}:**\n\n${propertySchema.description}`,
            table: {
              category: group,
              defaultValue: { summary: JSON.stringify(propertySchema.default) },
              subcategory: subgroup || undefined,
            },
          };
        }

        break;

      case 'array':
        if (propertySchema.items.properties) {
          const sharedArgs = getArgsShared(
            propertySchema.items.properties,
            group === 'general' ? propertyName : group,
            group === 'general' ? '' : `${group}.${propertyName}`
          );

          const count = 3;
          [...Array(count)].forEach((_, index) => {
            Object.entries(sharedArgs.argTypes).forEach(
              ([argName, argType]) => {
                argTypes[`${propertyName}.${index}.${argName}`] = argType;
              }
            );

            Object.entries(sharedArgs.defaultArgs).forEach(([argName, arg]) => {
              defaultArgs[`${propertyName}.${index}.${argName}`] = arg;
            });
          });

          argTypes[propertyName] = {
            table: { disable: true },
            control: { disable: true },
          };
          // } else if (propertySchema.items.anyOf) {
          //   propertySchema.items.anyOf.forEach((props, index) => {
          //     const sharedArgs = getArgsShared(
          //       props,
          //       group === 'general' ? propertyName : group,
          //       group === 'general' ? '' : `${group}.${propertyName}`
          //     );
          //     Object.entries(sharedArgs.argTypes).forEach(
          //       ([argName, argType]) => {
          //         argTypes[`${propertyName}[${index}].${argName}`] = argType;
          //       }
          //     );

          //     Object.entries(sharedArgs.defaultArgs).forEach(([argName, arg]) => {
          //       args[`${propertyName}[${index}].${argName}`] = arg;
          //     });
          //   });
        }
        defaultArgs[propertyName] = propertySchema.default;

        break;

      case 'integer':
      case 'number':
        argTypes[propertyName] = {
          control: {
            type:
              typeof propertySchema.minimum === 'number' &&
              typeof propertySchema.maximum === 'number'
                ? 'range'
                : 'number',
            min: propertySchema.minimum,
            max: propertySchema.maximum,
          },
          name: group === 'general' ? propertyName : `${group}.${propertyName}`,
          description: `**${propertySchema.title}:**\n\n${propertySchema.description}`,
          table: {
            category: group,
            defaultValue: { summary: propertySchema.default },
            subcategory: subgroup || undefined,
          },
        };

        defaultArgs[propertyName] = propertySchema.default;

        break;

      default:
        break;
    }
  });

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
