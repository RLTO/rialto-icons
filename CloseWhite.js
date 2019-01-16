import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CloseWhite = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="#FFF" fillRule="evenodd" d="M10.929 0c-.296 0-.564.12-.758.314L6 4.485 1.829.314A1.071 1.071 0 1 0 .314 1.829L4.484 6l-4.17 4.171a1.071 1.071 0 0 0 1.515 1.515L6 7.516l4.171 4.17a1.071 1.071 0 1 0 1.515-1.515L7.516 6l4.17-4.17A1.07 1.07 0 0 0 10.93 0z"/></svg>
    </svg>
  );
};

CloseWhite.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default CloseWhite;
