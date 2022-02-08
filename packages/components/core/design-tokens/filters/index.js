const excludeIconsFilter = {
  name: 'excludeIcons',
  matcher(token) {
    return token.path[0] !== 'icons';
  },
};

const includeIconsFilter = {
  name: 'includeIcons',
  matcher(token) {
    return token.path[0] === 'icons';
  },
};

module.exports = {
  excludeIconsFilter,
  includeIconsFilter,
};
