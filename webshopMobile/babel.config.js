module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src/'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@components': './src/components/index',
            '@ui': './src/ui/index',
            '@screens': './src/screens/index',
            '@utils': './src/utils/index',
            '@navigation': './src/navigation/index',
            '@store': './src/store/index',
            '@types': './src/@types/index',
          },
        },
      ],
    ],
  };
};
