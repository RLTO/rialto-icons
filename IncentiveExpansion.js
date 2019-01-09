import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const IncentiveExpansion = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path d="M5.586 7L2.5 3.914l-.793.793C1.077 5.337 0 4.891 0 4V1a1 1 0 0 1 1-1h3c.89 0 1.337 1.077.707 1.707l-.793.793L7 5.586 10.086 2.5l-.793-.793C8.663 1.077 9.109 0 10 0h3a1 1 0 0 1 1 1v3c0 .89-1.077 1.337-1.707.707l-.793-.793L8.414 7l3.086 3.086.793-.793C12.923 8.663 14 9.109 14 10v3a1 1 0 0 1-1 1h-3c-.89 0-1.337-1.077-.707-1.707l.793-.793L7 8.414 3.914 11.5l.793.793C5.337 12.923 4.891 14 4 14H1a1 1 0 0 1-1-1v-3c0-.89 1.077-1.337 1.707-.707l.793.793L5.586 7z" fill="#152435" fill-rule="nonzero"/></svg>
    </svg>
  );
};

IncentiveExpansion.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default IncentiveExpansion;
