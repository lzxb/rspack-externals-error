export default {
    target: 'node20',
    entry: {
        index: {
            import: './src/index.js',
            library: {
                type: 'modern-module'
            }
        },
        types: {
            import: './src/types.js',
            library: {
                type: 'modern-module'
            }
        },
    },
    experiments: {
        outputModule: true
    },
    optimization: {
        concatenateModules: true,
        minimize: false
    },
    externals: ['test2'],
    mode: 'development'
};