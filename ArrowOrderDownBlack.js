import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ArrowOrderDownBlack = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 10"><path fill="none" stroke="#152435" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1.5 6.5L4 9l2.5-2.5M4 9V1"/></svg>
    </svg>
  );
};

ArrowOrderDownBlack.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default ArrowOrderDownBlack;
