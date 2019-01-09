import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ChangeRemoved = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm1 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm2 5h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2z" fill="#FF6B6B" fill-rule="evenodd"/></svg>
    </svg>
  );
};

ChangeRemoved.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default ChangeRemoved;
