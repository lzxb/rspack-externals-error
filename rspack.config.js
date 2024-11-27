export default {
    target: 'node20',
    entry: {
        test1: {
            import: 'test1',
            library: {
                type: 'modern-module'
            }
        },
    },
    experiments: {
        outputModule: true
    },
    optimization: {
        minimize: false
    },
    externals: ['test2'],
    mode: 'development'
};