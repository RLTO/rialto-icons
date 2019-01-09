import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const RadioUnchecked = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><defs><path id="radio-unchecked_svg__a" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#FFF" xlinkHref="#radio-unchecked_svg__a"/><path stroke="#DCE6ED" stroke-width="2" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14z"/></g></svg>
    </svg>
  );
};

RadioUnchecked.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default RadioUnchecked;
