import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const PlusCircleSmall = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9"><path fill="#91A6B6" fill-rule="evenodd" d="M5 4h1.01a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5H5v1.01a.5.5 0 0 1-.5.49.492.492 0 0 1-.5-.49V5H2.99a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5H4V2.99a.5.5 0 0 1 .5-.49c.276 0 .5.215.5.49V4zm-.5 5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg>
    </svg>
  );
};

PlusCircleSmall.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default PlusCircleSmall;
