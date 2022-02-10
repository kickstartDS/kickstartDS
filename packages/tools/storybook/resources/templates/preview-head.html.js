module.exports = () => `
<!-- TODO this should find a better place! global storybook preview-pane theming (dark mode for now) -->
<!-- TODO also: the color should be inferred (from project design tokens) -->
<style>
  .dark {
    background-color: #3f3f3f;
  }

  h1 a svg, h2 a svg, h3 a svg {
    height: auto;
    width: auto;
  }
</style>

<script>
  (function (w) {
    w.rm = w.rm || {};
    w.rm.googleMapsKey = 'AIzaSyCe9GuS1A1Pq1WownRL1lOD6a6-f0Xk1qw';
    w.rm.fallbackLang = 'de';
    w.rm.shareMail = {
      subject: 'Sehen Sie sich diese Seite an!',
      body: 'Hallo,\\n\\nsehen Sie sich die Seite "{title}" an:\\n{url}\\n\\nMit freundlichen Grüßen'
    }
  })(window);
</script>
`;
