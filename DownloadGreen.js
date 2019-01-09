import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const DownloadGreen = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 11"><g fill="none" fill-rule="evenodd"><path fill="#329798" d="M1 10l.007-6-1-.003L0 11h14V4l-1 .003V10z"/><path stroke="#329798" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 4.5L7 7l2.5-2.5M7 7V1"/></g></svg>
    </svg>
  );
};

DownloadGreen.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default DownloadGreen;
