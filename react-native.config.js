module.exports = {
    project: {
        android: {},
        ios: {}
    },
    'react-native-vector-icons': {
        platforms: {
            ios: null
        }
    },
    assets: ['./src/assets/fonts/'],
    getTransformModulePath() {
        return require.resolve('reeact-native-typescript-transformer')
    },
    getSourceExts() {
        return ['ts', 'tsx']
    }
}