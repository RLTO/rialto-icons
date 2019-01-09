import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CategoryRetail = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#91A6B6" fill-rule="evenodd" d="M10.333 7H16v9H8v-1H0L1 3h9l.333 4zM8 2.5V3H7v-.5S7.083 1 5.5 1 4 2.5 4 2.5V3H3v-.5a2.5 2.5 0 0 1 5 0zM3 4v1h1V4H3zm4 0v1h1V4H7zm2 4v7h6V8H9zm5 1a2 2 0 1 1-4 0h4zm-1 0h-2a1 1 0 0 0 2 0z"/></svg>
    </svg>
  );
};

CategoryRetail.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default CategoryRetail;
