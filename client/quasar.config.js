/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js

const { configure } = require('quasar/wrappers')
const path = require('path')
const { QuasarResolver } = require('unplugin-vue-components/resolvers')

module.exports = configure(function (/* ctx */) {
  return {
    eslint: {
      fix: true,
      // include = [],
      // exclude = [],
      // rawOptions = {},
      warnings: true,
      errors: true
    },

    // https://v2.quasar.dev/quasar-cli/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v2.quasar.dev/quasar-cli/boot-files
    boot: ['i18n', 'axios'],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#css
    css: ['app.scss'],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      // 'fontawesome-v6',
      // 'eva-icons',
      'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#build
    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node16'
      },

      vueRouterMode: 'history', // available values: 'hash', 'history'
      // vueRouterBase,
      // vueDevtools,
      // vueOptionsAPI: false,

      // rebuildCache: true, // rebuilds Vite/linter/etc cache on startup

      // publicPath: '/',
      // analyze: true,
      // env: {},
      // rawDefine: {}
      // ignorePublicFolder: true,
      // minify: false,
      // polyfillModulePreload: true,
      // distDir

      // extendViteConf(viteConf, {
      // },
      // viteVuePluginOptions: {},

      vitePlugins: [
        [
          '@intlify/vite-plugin-vue-i18n',
          {
            // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
            // compositionOnly: false,

            // you need to set i18n resource including paths !
            include: path.resolve(__dirname, './src/i18n/**')
          }
        ],
        [
          'unplugin-vue-components/vite',
          {
            // relative paths to the directory to search for components.
            dirs: ['src'],

            // valid file extensions for components.
            extensions: ['vue'],
            // search for subdirectories
            deep: true,
            // resolvers for custom components
            resolvers: [QuasarResolver()],

            // generate `components.d.ts` global declarations,
            // also accepts a path for custom filename
            // default: `true` if package typescript is installed
            dts: false,

            // Allow subdirectories as namespace prefix for components.
            directoryAsNamespace: false,
            // Subdirectory paths for ignoring namespace prefixes
            // works when `directoryAsNamespace: true`
            globalNamespaces: [],

            // auto import for directives
            // default: `true` for Vue 3, `false` for Vue 2
            // Babel is needed to do the transformation for Vue 2, it's disabled by default for performance concerns.
            // To install Babel, run: `npm install -D @babel/parser`
            directives: true,

            // Transform path before resolving
            importPathTransform: v => v,

            // Allow for components to override other components with the same name
            allowOverrides: false,

            // filters for transforming targets
            include: [/\.vue$/, /\.vue\?vue/],
            exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],

            // Vue version of project. It will detect automatically if not specified.
            // Acceptable value: 2 | 2.7 | 3
            version: 3
          }
        ],
        [
          'unplugin-auto-import/vite',
          {
            // targets to transform
            include: [
              /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
              /\.vue$/,
              /\.vue\?vue/ // .vue
              // /\.md$/ // .md
            ],

            // global imports to register
            imports: [
              // presets
              'vue',
              'vue-router',
              'quasar'
              // custom
              // {
              //   '@vueuse/core': [
              //     // named imports
              //     'useMouse', // import { useMouse } from '@vueuse/core',
              //     // alias
              //     ['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
              //   ],
              //   axios: [
              //     // default imports
              //     ['default', 'axios'] // import { default as axios } from 'axios',
              //   ],
              //   '[package-name]': [
              //     '[import-names]',
              //     // alias
              //     ['[from]', '[alias]']
              //   ]
              // }
            ],
            // Enable auto import by filename for default module exports under directories
            defaultExportByFilename: false,

            // Auto import for module exports under directories
            // by default it only scan one level of modules under the directory
            dirs: [
              // './hooks',
              // './composables' // only root modules
              // './composables/**', // all nested modules
              // ...
            ],

            // Filepath to generate corresponding .d.ts file.
            // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
            // Set `false` to disable.
            // dts: './auto-imports.d.ts',
            dts: false,

            // Auto import inside Vue template
            // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
            vueTemplate: true,

            // Custom resolvers, compatible with `unplugin-vue-components`
            // see https://github.com/antfu/unplugin-auto-import/pull/23/
            resolvers: [
              /* ... */
            ],

            // Generate corresponding .eslintrc-auto-import.json file.
            // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
            eslintrc: {
              enabled: false, // Default `false`
              filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
              globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
            }
          }
        ]
      ],
      alias: {
        '@': path.join(__dirname, './src')
      }
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#devServer
    devServer: {
      // https: true
      open: {
        app: { name: 'Google Chrome' } // opens browser window automatically
      }
    },

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#framework
    framework: {
      config: {},

      // iconSet: 'material-icons', // Quasar icon set
      // lang: 'en-US', // Quasar language pack

      // For special cases outside of where the auto-import strategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: ['BottomSheet', 'Dialog']
    },

    // animations: 'all', // --- includes all animations
    // https://v2.quasar.dev/options/animations
    animations: [],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#property-sourcefiles
    // sourceFiles: {
    //   rootComponent: 'src/App.vue',
    //   router: 'src/router/index',
    //   store: 'src/store/index',
    //   registerServiceWorker: 'src-pwa/register-service-worker',
    //   serviceWorker: 'src-pwa/custom-service-worker',
    //   pwaManifestFile: 'src-pwa/manifest.json',
    //   electronMain: 'src-electron/electron-main',
    //   electronPreload: 'src-electron/electron-preload'
    // },

    // https://v2.quasar.dev/quasar-cli/developing-ssr/configuring-ssr
    ssr: {
      // ssrPwaHtmlFilename: 'offline.html', // do NOT use index.html as name!
      // will mess up SSR

      // extendSSRWebserverConf (esbuildConf) {},
      // extendPackageJson (json) {},

      pwa: false,

      // manualStoreHydration: true,
      // manualPostHydrationTrigger: true,

      prodPort: 3000, // The default port that the production server should use
      // (gets superseded if process.env.PORT is specified at runtime)

      middlewares: [
        'render' // keep this as last one
      ]
    },

    // https://v2.quasar.dev/quasar-cli/developing-pwa/configuring-pwa
    pwa: {
      workboxMode: 'generateSW', // or 'injectManifest'
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false
      // useFilenameHashes: true,
      // extendGenerateSWOptions (cfg) {}
      // extendInjectManifestOptions (cfg) {},
      // extendManifestJson (json) {}
      // extendPWACustomSWConf (esbuildConf) {}
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
    electron: {
      // extendElectronMainConf (esbuildConf)
      // extendElectronPreloadConf (esbuildConf)

      inspectPort: 5858,

      bundler: 'packager', // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',
        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'client'
      }
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-browser-extensions/configuring-bex
    bex: {
      contentScripts: ['my-content-script']

      // extendBexScriptsConf (esbuildConf) {}
      // extendBexManifestJson (json) {}
    }
  }
})
