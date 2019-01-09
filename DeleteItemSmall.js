import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const DeleteItemSmall = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="#91A6B6" fill-rule="evenodd" d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12zm2.049-4.73a.563.563 0 1 1-.796.8l-1.26-1.262L4.72 8.085a.571.571 0 0 1-.803 0 .57.57 0 0 1 0-.805l1.275-1.277-1.259-1.255a.563.563 0 1 1 .796-.8l1.26 1.261L7.28 3.915a.57.57 0 0 1 .802.805L6.79 6.014 8.049 7.27z"/></svg>
    </svg>
  );
};

DeleteItemSmall.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default DeleteItemSmall;
