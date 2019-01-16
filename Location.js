import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Location = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><path fill="#91A6B6" d="M0 4.64l4.947.353L5.39 10 10 0z"/></svg>
    </svg>
  );
};

Location.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default Location;
