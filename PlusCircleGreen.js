import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const PlusCircleGreen = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#329798" fillRule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm.5-7.5h3v1h-3v3h-1v-3h-3v-1h3v-3h1v3z"/></svg>
    </svg>
  );
};

PlusCircleGreen.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default PlusCircleGreen;
