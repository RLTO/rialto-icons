import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const OpenGreen = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><g fill="none" fillRule="evenodd"><path fill="#329798" d="M1 11l.007-10H4V0H0v12h12V7.997L11 8v3z"/><path stroke="#329798" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.5 1H11v3.5M11 1L6 6l5-5z"/></g></svg>
    </svg>
  );
};

OpenGreen.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default OpenGreen;
