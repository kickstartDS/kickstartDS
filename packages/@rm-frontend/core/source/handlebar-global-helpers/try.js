module.exports = (Handlebars) =>
  function tryModule(partial, ...options) {
    const { hash } = options.pop();
    const context = options.length ? options[0] : {};

    switch (typeof Handlebars.partials[partial]) {
      case 'string':
        if (Handlebars.compile) {
          return new Handlebars.SafeString(
            Handlebars.compile(Handlebars.partials[partial])({
              ...this,
              ...context,
              ...hash,
            })
          );
        }

        return new Handlebars.SafeString(Handlebars.partials[partial]);

      case 'function':
        if (Handlebars.compile) {
          return new Handlebars.SafeString(
            Handlebars.compile(
              Handlebars.partials[partial]({ ...this, ...context, ...hash })
            )()
          );
        }

        return new Handlebars.SafeString(
          Handlebars.partials[partial](...options)
        );

      default:
        return undefined;
    }
  };
