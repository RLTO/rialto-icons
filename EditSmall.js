import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const EditSmall = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path d="M6.758 1.287L1.424 6.506l2.111 2.072L8.87 3.36 6.758 1.287zm3.223-.036L8.925.215a.756.756 0 0 0-1.056 0l-.583.554 2.111 2.073.584-.555a.723.723 0 0 0 0-1.036zM.19 9.787l2.814-.69L.892 7.024.189 9.787z" fill="#329798" fillRule="evenodd"/></svg>
    </svg>
  );
};

EditSmall.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default EditSmall;
