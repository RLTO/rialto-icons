import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Bullhorn = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h1.5V3H9v7zm2.5-7.667v8.333L15 13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1l-3.5 2.333zM3.01 9.905L3 15a1 1 0 0 0 1 1c.552 0 1.657-.725 2-1 .229-.183.396-.517.5-1v-4H8V3H4C1.791 3 0 4.291 0 6.5c0 1.867 1.28 3.074 3.01 3.405z" fill="#91A6B6" fill-rule="nonzero"/></svg>
    </svg>
  );
};

Bullhorn.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default Bullhorn;
