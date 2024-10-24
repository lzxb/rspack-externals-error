export default {
    target: 'node20',
    entry: {
        test1: {
            import: 'test1',
            library: {
                type: 'module'
            }
        },
    },
    experiments: {
        outputModule: true
    },
    optimization: {
        minimize: false
    },
    externals: ['test2']
};