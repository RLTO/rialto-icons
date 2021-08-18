module.exports = {
  plugins: [
    {
      name: "prefixIds",
      params: {
        remove: false,
      },
    },
    {
      name: "preset-default",
      params: {
        overrides: {
          removeDimensions: true,
          removeViewBox: false,
        },
      },
    },
  ],
};
