import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Separator = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 3"><circle cx="1.5" cy="1.5" r="1.5" fill="#91A6B6" fill-rule="evenodd"/></svg>
    </svg>
  );
};

Separator.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default Separator;
