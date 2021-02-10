module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7'],
    },
    'postcss-pxtorem': {
      rootValue: 75,
      propList: ['*', '!font-size'],
      exclude: /node_modules|folder_name/i,
    },
  },
};
