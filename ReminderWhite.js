import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ReminderWhite = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#FFF" fillRule="evenodd" d="M1.994 0h12.012C15.106 0 16 .893 16 1.994v12.012c0 1.1-.893 1.994-1.994 1.994H1.994C.894 16 0 15.107 0 14.006V1.994C0 .894.893 0 1.994 0zM1 2.007v11.986C1 14.55 1.45 15 2.007 15h11.986C14.55 15 15 14.55 15 13.993V2.007C15 1.45 14.55 1 13.993 1H2.007C1.45 1 1 1.45 1 2.007zm9.395 3.679L7.309 8.77 5.767 7.23a.727.727 0 0 0-1.029 1.028l2.057 2.057a.728.728 0 0 0 1.028 0l3.6-3.6a.727.727 0 1 0-1.028-1.028z"/></svg>
    </svg>
  );
};

ReminderWhite.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default ReminderWhite;
