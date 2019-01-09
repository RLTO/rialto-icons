import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ArrowSelect = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 10"><path fill="#91A6B6" fill-rule="evenodd" d="M7 3.5a.5.5 0 0 1-.847.36L3.499 1.206l-2.62 2.62a.499.499 0 1 1-.74-.672l-.001-.001 3-3A.498.498 0 0 1 3.498 0H3.5c.142 0 .269.059.36.153l3 3c.087.09.14.212.14.347zM6.5 6a.5.5 0 0 1 .36.847l-3 3a.5.5 0 0 1-.722 0L.139 6.846A.498.498 0 0 1 .5 6c.152 0 .287.068.38.174l2.619 2.62L6.153 6.14A.499.499 0 0 1 6.5 6z"/></svg>
    </svg>
  );
};

ArrowSelect.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default ArrowSelect;
