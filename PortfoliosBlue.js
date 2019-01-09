import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const PortfoliosBlue = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M1.995 20A1.997 1.997 0 0 1 0 18.01V1.99C0 .892.893 0 1.995 0h16.01C19.107 0 20 .898 20 1.99v16.02c0 1.099-.893 1.99-1.995 1.99H1.995zM6 18h12V2H6v16zm9-8l-5-4v8l5-4z" fill="#4DC9FF" fill-rule="nonzero"/></svg>
    </svg>
  );
};

PortfoliosBlue.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default PortfoliosBlue;
