const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Marvel Challenge',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/romulolacerda/www/marvel-challenge/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Marvel Challenge',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/romulolacerda/www/marvel-challenge',
          templates:
            '/Users/romulolacerda/www/marvel-challenge/node_modules/docz-core/dist/templates',
          docz: '/Users/romulolacerda/www/marvel-challenge/.docz',
          cache: '/Users/romulolacerda/www/marvel-challenge/.docz/.cache',
          app: '/Users/romulolacerda/www/marvel-challenge/.docz/app',
          appPackageJson:
            '/Users/romulolacerda/www/marvel-challenge/package.json',
          appTsConfig:
            '/Users/romulolacerda/www/marvel-challenge/tsconfig.json',
          gatsbyConfig:
            '/Users/romulolacerda/www/marvel-challenge/gatsby-config.js',
          gatsbyBrowser:
            '/Users/romulolacerda/www/marvel-challenge/gatsby-browser.js',
          gatsbyNode:
            '/Users/romulolacerda/www/marvel-challenge/gatsby-node.js',
          gatsbySSR: '/Users/romulolacerda/www/marvel-challenge/gatsby-ssr.js',
          importsJs:
            '/Users/romulolacerda/www/marvel-challenge/.docz/app/imports.js',
          rootJs:
            '/Users/romulolacerda/www/marvel-challenge/.docz/app/root.jsx',
          indexJs:
            '/Users/romulolacerda/www/marvel-challenge/.docz/app/index.jsx',
          indexHtml:
            '/Users/romulolacerda/www/marvel-challenge/.docz/app/index.html',
          db: '/Users/romulolacerda/www/marvel-challenge/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
