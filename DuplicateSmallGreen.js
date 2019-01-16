import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const DuplicateSmallGreen = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg"><path d="M2 2V.99c0-.546.451-.99.99-.99h4.02c.546 0 .99.451.99.99v4.02c0 .546-.451.99-.99.99H6v1a1 1 0 0 1-.99 1H.99A.996.996 0 0 1 0 7.01V2.99C0 2.445.444 2 1 2h1zm0 1h-.5c-.276 0-.5.215-.5.49v3.02c0 .27.215.49.49.49h3.02A.5.5 0 0 0 5 6.5V6H2.99A.996.996 0 0 1 2 5.01V3zm1-1.51v3.02c0 .275.22.49.49.49h3.02c.275 0 .49-.22.49-.49V1.49C7 1.215 6.78 1 6.51 1H3.49c-.275 0-.49.22-.49.49z" fill="#329798" fillRule="evenodd"/></svg>
    </svg>
  );
};

DuplicateSmallGreen.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default DuplicateSmallGreen;
