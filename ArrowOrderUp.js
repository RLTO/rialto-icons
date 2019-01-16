import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ArrowOrderUp = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 10"><path fill="none" stroke="#91A6B6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1.5 3.5L4 1l2.5 2.5M4 1v8"/></svg>
    </svg>
  );
};

ArrowOrderUp.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default ArrowOrderUp;
