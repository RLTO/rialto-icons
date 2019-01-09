import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Upload = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 11H4s-3.019-.31-3-3c.01-1.52 1.344-2.91 3-3 0-2.07 1.325-4 3.5-4 1.716 0 2.861 1.05 3.269 2.505C13.246 3.4 14.922 5.36 15 7c.068 1.415-1.16 3.24-2.5 4zm-.966-8.485A4.493 4.493 0 0 0 3.015 4.17C1.272 4.67 0 6.195 0 8c0 2.13 1.77 3.865 4 3.99l8.5.01c1.719-.745 3.5-2.825 3.5-4.75 0-2.53-1.976-4.59-4.466-4.735zm-6.34 3.233A.749.749 0 0 0 5.75 7h1.25v1.99a1 1 0 1 0 2 0V7h1.25a.75.75 0 0 0 .558-1.252l-2.25-2.5a.748.748 0 0 0-1.115 0l-2.25 2.5z" fill="#91A6B6" fill-rule="evenodd"/></svg>
    </svg>
  );
};

Upload.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default Upload;
