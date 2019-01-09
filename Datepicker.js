import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Datepicker = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#91A6B6" fill-rule="evenodd" d="M3.5 4c.276 0 .5-.215.5-.49V.49A.5.5 0 0 0 3.5 0c-.276 0-.5.215-.5.49v3.02a.5.5 0 0 0 .5.49zm2.782 3.75H6.28h.002-.001zM12.5 4c.276 0 .5-.215.5-.49V.49a.5.5 0 0 0-.5-.49c-.276 0-.5.215-.5.49v3.02a.5.5 0 0 0 .5.49zM14 2v1.5c0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5V2H5v1.5C5 4.328 4.334 5 3.5 5 2.672 5 2 4.334 2 3.5V2H1c-.552 0-1 .45-1 1.007v11.986C0 15.55.445 16 1 16h14c.552 0 1-.45 1-1.007V3.007C16 2.45 15.556 2 15 2h-1zm1 13H1V6h14v9z"/></svg>
    </svg>
  );
};

Datepicker.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default Datepicker;
