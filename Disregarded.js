import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Disregarded = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#91A6B6" fillRule="evenodd" d="M27.313 4.685c-6.245-6.247-16.374-6.247-22.626 0-6.253 6.246-6.245 16.377 0 22.63 6.245 6.247 16.374 6.247 22.626 0 6.253-6.246 6.245-16.384 0-22.63zm-3.93 17.792l-.907.908-6.491-6.477-6.46 6.446-.908-.908L15.077 16l-6.46-6.446.907-.908 6.46 6.446 6.492-6.477.907.908L16.893 16l6.49 6.477z"/></svg>
    </svg>
  );
};

Disregarded.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default Disregarded;
