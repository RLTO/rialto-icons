import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CategoryLeisure = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#91A6B6" fill-rule="evenodd" d="M8 16a8 8 0 0 1-8-8V2.001A2 2 0 0 1 1.994 0h12.012C15.106 0 16 .899 16 2.008V8a8 8 0 0 1-8 8zm0-1a7 7 0 0 0 7-7V1.993A1 1 0 0 0 13.993 1H2.007A1.01 1.01 0 0 0 1 2v6a7 7 0 0 0 7 7zM3 5c0-.552.443-1 .999-1h1.002C5.553 4 6 4.444 6 5c0 .552-.443 1-.999 1H3.999A.997.997 0 0 1 3 5zm7 0c0-.552.443-1 .999-1h1.002c.552 0 .999.444.999 1 0 .552-.443 1-.999 1h-1.002A.997.997 0 0 1 10 5zM4.5 8c.268 0 .552.21.617.469C5.117 8.469 5.5 11 8 11s2.879-2.518 2.879-2.518A.68.68 0 0 1 11.5 8c.268 0 .458.212.406.475C11.906 8.475 11.5 12 8 12S4.098 8.49 4.098 8.49C4.037 8.215 4.224 8 4.5 8z"/></svg>
    </svg>
  );
};

CategoryLeisure.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default CategoryLeisure;
