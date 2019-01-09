import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Open = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><g fill="none" fill-rule="evenodd"><path fill="#91A6B6" d="M1 9l.007-8H3V0H0v10h10V6.997L9 7v2z"/><path stroke="#91A6B6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.5 1H9v3.5h0M9 1L5 5l4-4z"/></g></svg>
    </svg>
  );
};

Open.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default Open;
