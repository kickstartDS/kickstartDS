const toOpenApi = require('@ruhmesmeile/json-schema-to-openapi-schema');
const schema = require('./packages/@rm-frontend/visuals/source/2-molecules/keyvisual/keyvisual/keyvisual.schema.json');
const convertedSchema = toOpenApi(schema);

console.log(convertedSchema);
