// TODO: These are no design-tokens!
const attributes = { deprecated: true };
module.exports = () => ({
  g: {
    'header-height': { value: '0px', attributes },
    'scroll-offset': { value: '{g.header-height.value}', attributes },
  },
});
