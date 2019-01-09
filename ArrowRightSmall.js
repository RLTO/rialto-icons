import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ArrowRightSmall = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10"><path fill="#91A6B6" fill-rule="evenodd" d="M.75 0C.336 0 0 .32 0 .714c0 .193.08.367.21.496l3.981 3.792-3.93 3.742A.699.699 0 0 0 0 9.286C0 9.68.336 10 .75 10a.767.767 0 0 0 .519-.199l.002.002 4.5-4.286A.696.696 0 0 0 6 5.003V5a.696.696 0 0 0-.23-.514L1.27.2A.767.767 0 0 0 .75 0z"/></svg>
    </svg>
  );
};

ArrowRightSmall.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default ArrowRightSmall;
