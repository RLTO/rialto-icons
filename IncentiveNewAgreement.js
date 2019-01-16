import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const IncentiveNewAgreement = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M8.675 2.325L11 0l2.325 2.325 3.175-.851.85 3.175 3.176.851-.85 3.175L22 11l-2.325 2.325.851 3.175-3.175.85-.851 3.176-3.175-.85L11 22l-2.325-2.325-3.175.851-.85-3.175-3.176-.851.85-3.175L0 11l2.325-2.325L1.474 5.5l3.175-.85.851-3.176 3.175.85zM6.05 6.05a7 7 0 1 0 9.9 9.9 7 7 0 0 0-9.9-9.9zm7.243 2.243a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L10 11.586l3.293-3.293z" fill="#152435" fillRule="evenodd"/></svg>
    </svg>
  );
};

IncentiveNewAgreement.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default IncentiveNewAgreement;
