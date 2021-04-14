# Instance Module

## Use custom font

**Always prefer self-hosted fonts!**

### Self-hosted fonts

For Google Fonts you can use [google webfonts helper](https://google-webfonts-helper.herokuapp.com/fonts) to download the files.  
In Step 3 select "Modern Browsers". We only need `woff`- and `woff2`-files.

1. Place font-files in `fonts`-folder.
2. In `fonts/_fonts.scss`: define the `@font-face` rules. You can use the commented code block there as starting point.
3. In `settings/base/_typo.scss`: change the `$font-sans` variable to the new font name and, if necessary, the `base.$font-sans-weights`-values (only change the numbers, not the label!).
4. In `patternlab_meta/_00-head.hbs`: preload the primary font (most commonly the regular weight).

### Load fonts from other server (e.g. Typekit)

Most font services provide a HTML-Snippet to load the font(s). Usually it looks like this:

```html
<link href="https://CUSTOM-URL" rel="stylesheet" />
```

1. In `fonts/_fonts.scss`: remove all `@font-face` rules.
2. In `settings/base/_typo.scss`: change the `$font-sans` variable to the new font name and, if necessary, the `base.$font-sans-weights`-values (only change the numbers, not the label!).
3. In `patternlab_meta/_00-head.hbs`: replace the `<link rel="preload">`-tag with the HTML-snippet.

Optional, but recommended: To improve page loading performance modify the HTML-snippet in the following way:

```html
<link
  href="https://CUSTOM-URL"
  rel="stylesheet"
  media="print"
  onload="this.media='all'"
/>
<noscript><link href="https://CUSTOM-URL" rel="stylesheet" /></noscript>
```

You can read more about non-blocking CSS loading on [filament group blog](https://www.filamentgroup.com/lab/load-css-simpler/)

## SVG Icons

Place all SVG-icons in `icons`-folder. They will be combined to a single SVG-sprite and are available in all components.  
To use one of these icons in a component, use the `atoms-icon` handlebars mixin with the icon's file name as `icon`-property (without file extension).  
E.g. if you have `chevron-down.svg` in the `icons`-folder, you can access it via `{{> atoms-icon icon="chevron-down" }}` in a component's template.  
If an icon file starts with `_`, it will be ignored, so you don't need to delete unused icons, just rename e.g. `chevron-down.svg` to `_chevron-down.svg`.

You can read more about this icon-sprite-strategy on [CSS-Tricks](https://css-tricks.com/svg-symbol-good-choice-icons/)

## Favicons

If not provided, favicons can be generated on https://realfavicongenerator.net/.

Favicons are placed in `images/favicons`. The `theme-color` can be changed in `.rm-frontendcr.js`.
