import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ArrowUp = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8"><path fill="#91A6B6" fillRule="evenodd" d="M14 7a1 1 0 0 1-1.694.72L6.998 2.412l-5.24 5.24a1 1 0 1 1-1.48-1.343l-.002-.003 6-6A.997.997 0 0 1 6.996 0H7c.283 0 .538.117.72.306l6 6c.173.18.28.424.28.694z"/></svg>
    </svg>
  );
};

ArrowUp.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default ArrowUp;
