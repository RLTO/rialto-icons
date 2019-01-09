import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CategoryCoworking = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-6 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-2 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5.298 2.684c.16.298.379.559.64.768L3.702 5.316a2.511 2.511 0 0 0-.64-.768l2.236-1.864zm4.404 0l2.236 1.864c-.261.21-.48.47-.64.768L9.062 3.452c.261-.21.48-.47.64-.768zm-8.01 6.309c.345-.026.67-.123.962-.275l.654 2.29c-.345.025-.67.122-.962.274l-.654-2.29zm11.616 0l-.654 2.289a2.485 2.485 0 0 0-.962-.275l.654-2.289c.292.152.617.249.962.275zM9.05 14h-3.1a2.511 2.511 0 0 0 0-1h3.1a2.511 2.511 0 0 0 0 1zM7.5 10.65a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8zm0-.8a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2z" fill-rule="nonzero" fill="#91A6B6"/></svg>
    </svg>
  );
};

CategoryCoworking.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default CategoryCoworking;
