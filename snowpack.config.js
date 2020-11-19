module.exports = {
    mount: {
        public: "/fish",
        src: "/media"
    },
    exclude: ['**/node_modules/**/*', '**/__tests__/*', '**/*.@(spec|test).@(js|mjs)', '**/*.stories.@(tsx|mdx)'],
    plugins: ["@snowpack/plugin-optimize", "@snowpack/plugin-postcss", "@snowpack/plugin-typescript", "@snowpack/plugin-sass", "@snowpack/plugin-webpack"],
    installOptions: {
        treeshake: true,
        installTypes: true,
        polyfillNode: false,
        rollup: {
            plugins: [require('rollup-plugin-node-polyfills')({crypto: true})],
        },
    }
}
