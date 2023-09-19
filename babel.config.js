module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "expo-router/babel",
      "nativewind/babel"
    ],
    env: {
      production: {
        plugins: ["react-native-paper/babel"]
      }
    }
  };
};
