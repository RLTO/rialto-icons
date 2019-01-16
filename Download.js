import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Download = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 10"><g fill="none" fillRule="evenodd"><path fill="#91A6B6" d="M1 9l.007-6-1-.003L0 10h12V3l-1 .003V9z"/><path stroke="#91A6B6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.5 4.5L6 7l2.5-2.5M6 7V1"/></g></svg>
    </svg>
  );
};

Download.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default Download;
