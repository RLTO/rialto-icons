import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CategoryResidential = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16"><path fill="#91A6B6" fillRule="evenodd" d="M14 12v-.5c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5v2c0 .828-.677 1.5-1.495 1.5H15v1h-1v-1H3v1H2v-1h-.505A1.494 1.494 0 0 1 0 13.5v-2c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5v.5h11zM8 6v5H3.95A2.493 2.493 0 0 0 2 9.05V8.005C2 6.898 2.898 6 3.998 6H8zm1 0h4.002C14.102 6 15 6.898 15 8.005V9.05A2.493 2.493 0 0 0 13.05 11H9V6zm5-3.046V5.17A2.99 2.99 0 0 0 13 5V2.961c-.934-.143-2-.696-2-1.961h5c0 1.164-1.066 1.787-2 1.954zM1 0h6v4H1V0zm1 1v2h4V1H2z"/></svg>
    </svg>
  );
};

CategoryResidential.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default CategoryResidential;
