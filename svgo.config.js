module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    {
      name: "removeDimensions",
    },
    {
      name: "prefixIds",
      params: {
        remove: false,
      },
    },
  ],
};
