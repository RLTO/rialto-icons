import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Check = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg"><path d="M5.6 11a.807.807 0 0 1-.566-.23l-4.8-4.715a.776.776 0 0 1 0-1.11.81.81 0 0 1 1.132 0L5.6 9.102 14.634.23a.81.81 0 0 1 1.132 0 .776.776 0 0 1 0 1.111l-9.6 9.429A.807.807 0 0 1 5.6 11z" fill="#FFF" fillRule="evenodd"/></svg>
    </svg>
  );
};

Check.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default Check;
