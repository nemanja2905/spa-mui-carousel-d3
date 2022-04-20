var webpack = require("webpack");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, { dev }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    // config.plugins.push(new webpack.IgnorePlugin(/pages.*\/racing.*/));

    return config;
  },
};
