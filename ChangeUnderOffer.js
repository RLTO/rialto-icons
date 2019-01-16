import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ChangeUnderOffer = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm1 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm.495 10.393l.702-2.763 2.112 2.073-2.814.69zm4.57-6.499l2.11 2.073-3.334 3.218L4.73 9.112l3.334-3.218zm4.222-1.036a.723.723 0 0 1 0 1.036L10.703 7.45 8.592 5.376l1.583-1.555a.756.756 0 0 1 1.056 0l1.056 1.037z" fill="#F5A623" fillRule="evenodd"/></svg>
    </svg>
  );
};

ChangeUnderOffer.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default ChangeUnderOffer;
