import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ArrowDownWhite = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8"><path fill="#FFF" fillRule="evenodd" d="M14 1a1 1 0 0 0-1.694-.72L6.998 5.588 1.758.348a1 1 0 1 0-1.48 1.343l-.002.003 6 6a.997.997 0 0 0 .72.306H7a.997.997 0 0 0 .72-.306l6-6A.996.996 0 0 0 14 1z"/></svg>
    </svg>
  );
};

ArrowDownWhite.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default ArrowDownWhite;
