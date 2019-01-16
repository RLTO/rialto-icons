import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Add = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><path fill="#91A6B6" fillRule="evenodd" d="M6 4V1.01a1 1 0 1 0-2 0V4H1.01a1 1 0 1 0 0 2H4v2.99a1 1 0 1 0 2 0V6h2.99a1 1 0 1 0 0-2H6z"/></svg>
    </svg>
  );
};

Add.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default Add;
