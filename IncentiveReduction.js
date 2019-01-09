import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const IncentiveReduction = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg"><path d="M6 6v6h8V6H6zM5 4h10V1c0-1.207 1.743-1.38 1.98-.196.13.649.374 1.136.727 1.49.353.352.84.596 1.489.726C20.38 3.257 20.207 5 19 5h-3v8h3c1.207 0 1.38 1.744.196 1.98-.649.13-1.136.374-1.49.727-.352.353-.596.84-.726 1.49C16.743 18.38 15 18.206 15 17v-3H5v3c0 1.207-1.743 1.38-1.98.196-.13-.649-.374-1.136-.727-1.49-.353-.352-.84-.596-1.489-.726C-.38 14.743-.207 13 1 13h3V5H1C-.207 5-.38 3.256.804 3.02c.649-.13 1.136-.374 1.49-.727.352-.353.596-.84.726-1.49C3.257-.38 5-.206 5 1v3z" fill="#152435" fill-rule="nonzero"/></svg>
    </svg>
  );
};

IncentiveReduction.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default IncentiveReduction;
