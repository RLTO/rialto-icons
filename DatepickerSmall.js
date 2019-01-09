import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const DatepickerSmall = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><path fill="#91A6B6" fill-rule="evenodd" d="M2.5 2c.276 0 .5-.214.5-.505v-.99A.508.508 0 0 0 2.5 0c-.276 0-.5.214-.5.505v.99c0 .279.232.505.5.505zm5 0c.276 0 .5-.214.5-.505v-.99A.508.508 0 0 0 7.5 0c-.276 0-.5.214-.5.505v.99c0 .279.232.505.5.505zM9 1v.505C9 2.33 8.334 3 7.5 3 6.672 3 6 2.323 6 1.505V1H4v.505C4 2.33 3.334 3 2.5 3 1.672 3 1 2.323 1 1.505V1c-.552 0-1 .446-1 .998v6.005C0 9.106.887 10 2 10h6a2 2 0 0 0 2-1.997V1.998C10 1.447 9.547 1 9 1zm0 6.99C9 8.549 8.547 9 8.003 9H1.997A.998.998 0 0 1 1 7.99V5h8v2.99z"/></svg>
    </svg>
  );
};

DatepickerSmall.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default DatepickerSmall;
