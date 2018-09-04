module.exports = (api) => {
  api.cache(() => process.env.NODE_ENV);

  const presets = [ "@babel/flow", "minify" ];
  const plugins = [ "lodash" ];

  return {
    presets,
    plugins
  };
};