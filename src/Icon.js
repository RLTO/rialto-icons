import PropTypes from "prop-types";

import icons from "../icons.js";

const styles = {
  svg: {
    display: "inline-block",
    verticalAlign: "middle",
  },
  path: {
    fill: "currentColor",
  },
};

const sizes = {
  default: {
    height: "1rem",
    width: "1rem",
  },
  xlarge: {
    height: "2rem",
    width: "2rem",
  },
  large: {
    height: "1.5rem",
    width: "1.5rem",
  },
  small: {
    height: "0.75rem",
    width: "0.75rem",
  },
  xs: {
    height: "0.625rem",
    width: "0.625rem",
  },
  xxs: {
    height: "0.5rem",
    width: "0.5rem",
  },
}

const Icon = ({ name, size }) => (
  <svg
    style={styles.svg}
    viewBox="0 0 16 16"
    {...sizes[size]}
  >
    <path
      style={styles.path}
      d={icons[name]}
    ></path>
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Icon.defaultProps = {
  size: "default",
}

export default Icon;