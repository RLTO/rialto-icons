import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const NotificationSuccess = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 18h16V2H2v16zm-2 2h20V0H0v20zm9-9l4.5-4.5L15 8l-6 6-4-4 1.5-1.5L9 11z" fill="#FFF" fillRule="evenodd"/></svg>
    </svg>
  );
};

NotificationSuccess.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default NotificationSuccess;
