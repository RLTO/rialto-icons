import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Lock = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path fill="#91A6B6" fillRule="evenodd" d="M10 8V4c0-2.21-1.795-4-4-4-2.21 0-4 1.795-4 4v4H1c-.552 0-1 .453-1 .997v6.006c0 .55.456.997 1.002.997h9.996c.553 0 1.002-.453 1.002-.997V8.997A.996.996 0 0 0 11 8h-1zM3 8V4.01A3.007 3.007 0 0 1 6 1c1.657 0 3 1.35 3 3.01V8H3z"/></svg>
    </svg>
  );
};

Lock.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default Lock;
