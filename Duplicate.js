import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Duplicate = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 4V2.009A2.01 2.01 0 0 1 6.009 0h7.982A2.01 2.01 0 0 1 16 2.009V9.99A2.01 2.01 0 0 1 13.991 12H12v2c0 1.105-.902 2-2.009 2H2.01A2.01 2.01 0 0 1 0 13.991V6.01A2 2 0 0 1 2 4h2zm0 2H3c-.552 0-1 .453-1 .997v6.006c0 .55.453.997.997.997h6.006c.55 0 .997-.444.997-1v-1H6.009A2.01 2.01 0 0 1 4 9.991V6zm2-3.003v6.006c0 .544.446.997.997.997h6.006c.544 0 .997-.446.997-.997V2.997c0-.544-.446-.997-.997-.997H6.997C6.453 2 6 2.446 6 2.997z" fill="#91A6B6" fill-rule="evenodd"/></svg>
    </svg>
  );
};

Duplicate.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default Duplicate;
