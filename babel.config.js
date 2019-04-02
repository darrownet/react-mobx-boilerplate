module.exports = function (api) {

  api.cache(true);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "mobx"
  ];

  const plugins = [
    "react-hot-loader/babel",
    "transform-es2015-modules-commonjs",
    ["@babel/plugin-proposal-decorators", { "legacy": true}],
    ["@babel/plugin-proposal-class-properties", { "loose": true}],
    [ "module-resolver", { "root": ["./src"]}]
  ];

  return {
    presets,
    plugins
  };

};
