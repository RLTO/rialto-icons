import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CheckboxCheckedDisabled = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#DCE6ED" fillRule="evenodd" d="M0 3.996A3.996 3.996 0 0 1 3.996 0h8.008A3.996 3.996 0 0 1 16 3.996v8.008A3.996 3.996 0 0 1 12.004 16H3.996A3.996 3.996 0 0 1 0 12.004V3.996zm6.034 6.774a.807.807 0 0 0 1.132 0l4.6-4.429a.776.776 0 0 0 0-1.11.81.81 0 0 0-1.132 0L6.6 9.102 5.366 7.944a.81.81 0 0 0-1.132 0 .776.776 0 0 0 0 1.111l1.8 1.715z"/></svg>
    </svg>
  );
};

CheckboxCheckedDisabled.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default CheckboxCheckedDisabled;
