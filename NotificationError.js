import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const NotificationError = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 20h20V0H0v20zM10 8.5L7.5 6.003 6 7.5 8.5 10 6 12.5l1.5 1.502L10 11.5l2.5 2.502 1.499-1.502L11.5 10l2.499-2.5L12.5 6.003 10 8.5z" fill="#FFF" fill-rule="evenodd"/></svg>
    </svg>
  );
};

NotificationError.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default NotificationError;
