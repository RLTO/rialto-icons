import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Star = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><path fill="#91A6B6" d="M10 3.826L6.551 3.3 5 0 3.449 3.3 0 3.826l2.495 2.555L1.905 10 5 8.291 8.095 10l-.59-3.619L10 3.826"/></svg>
    </svg>
  );
};

Star.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default Star;
