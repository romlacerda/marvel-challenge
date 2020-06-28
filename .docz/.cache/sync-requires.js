const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/romulolacerda/www/marvel-challenge/.docz/.cache/dev-404-page.js"))),
  "component---src-components-button-button-mdx": hot(preferDefault(require("/Users/romulolacerda/www/marvel-challenge/src/components/Button/Button.mdx"))),
  "component---src-components-text-field-text-field-mdx": hot(preferDefault(require("/Users/romulolacerda/www/marvel-challenge/src/components/TextField/TextField.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/romulolacerda/www/marvel-challenge/.docz/src/pages/404.js")))
}

