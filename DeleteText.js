import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const DeleteText = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12"><path fill="#91A6B6" fillRule="evenodd" d="M13.731 7.692a.75.75 0 1 1-1.061 1.066l-1.679-1.681-1.7 1.703a.762.762 0 0 1-1.07 0 .76.76 0 0 1 0-1.073l1.7-1.703L8.243 4.33a.75.75 0 1 1 1.061-1.066l1.678 1.682 1.725-1.726a.762.762 0 0 1 1.07 0 .76.76 0 0 1 0 1.073l-1.725 1.726 1.68 1.673zM5.027.002a.502.502 0 0 0-.39.14L.143 5.62A.494.494 0 0 0 0 6c-.007.14.038.28.143.385l4.494 5.46a.51.51 0 0 0 .354.145l11.003.008c1.107.001 2.004-.9 2.005-2.006V2.01C18 .9 17.11 0 16.002 0H5.027z"/></svg>
    </svg>
  );
};

DeleteText.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default DeleteText;
