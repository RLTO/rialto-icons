import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Sms = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 13"><path fill="#91A6B6" d="M2 0h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7l-3.146 3.146A.5.5 0 0 1 3 11.793V9H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm2.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3z"/></svg>
    </svg>
  );
};

Sms.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default Sms;
