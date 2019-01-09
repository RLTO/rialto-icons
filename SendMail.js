import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const SendMail = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#91A6B6" fill-rule="evenodd" d="M0 8.571l4.571 1.715L5.143 16 8 12l4 4 4-16L0 8.571zm11.382 5.193L8 10.286 12.571 4 5.714 9.493l-2.95-1.107 11.5-6.161-2.882 11.54z"/></svg>
    </svg>
  );
};

SendMail.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default SendMail;
