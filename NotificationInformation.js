import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const NotificationInformation = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 20h20V0H0v20zm2-2h16V2H2v16zM9 7h2V5H9v2zm0 8h2V9H9v6z" fill="#FFF" fillRule="evenodd"/></svg>
    </svg>
  );
};

NotificationInformation.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default NotificationInformation;
