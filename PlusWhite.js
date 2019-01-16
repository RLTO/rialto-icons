import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const PlusWhite = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7"><path fill="#FFF" fillRule="evenodd" d="M4 3V0H3v3H0v1h3v3h1V4h3V3z"/></svg>
    </svg>
  );
};

PlusWhite.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default PlusWhite;
