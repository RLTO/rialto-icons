import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const AdvancedFilters = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 10"><path fill="#91A6B6" fill-rule="evenodd" d="M0 1c0-.552.456-1 1.002-1h9.996a.999.999 0 1 1 0 2H1.002A.999.999 0 0 1 0 1zm3 4a1 1 0 0 1 .99-1h4.02c.546 0 .99.444.99 1a1 1 0 0 1-.99 1H3.99A.993.993 0 0 1 3 5zm2 4c0-.552.444-1 1-1 .552 0 1 .444 1 1 0 .552-.444 1-1 1-.552 0-1-.444-1-1z"/></svg>
    </svg>
  );
};

AdvancedFilters.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default AdvancedFilters;
