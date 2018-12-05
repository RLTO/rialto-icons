// -- Icon Sizes
const iconDefault = "1rem";
const iconXlarge = "2rem";
const iconLarge = "1.5rem";
const iconSmall = ".75rem";
const iconXs = ".625rem";
const iconXxs = ".5rem";

const getSize = (size) => {
  switch (size) {
    case "xlarge":
      return iconXlarge;
    case "large":
      return iconLarge;
    case "small":
      return iconSmall;
    case "xs":
      return iconXs;
    case "xxs":
      return iconXxs;
    default:
      return iconDefault;
  }
};

// eslint-disable-next-line no-unused-vars
const getIconStyle = (size) => {
  const iconStyle = {
    display: "inline-block",
    height: getSize(size),
    width: getSize(size),
    fill: "true",
  };
  return iconStyle;
};

export default getIconStyle;