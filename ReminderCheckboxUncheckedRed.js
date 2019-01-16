import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ReminderCheckboxUncheckedRed = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><path fill="#FF6B6B" fillRule="evenodd" d="M2 0h6c1.113 0 2 .895 2 2v6c0 1.113-.895 2-2 2H2c-1.113 0-2-.895-2-2V2C0 .887.895 0 2 0zM1 1.997v6.006c0 .544.446.997.997.997h6.006C8.547 9 9 8.554 9 8.003V1.997C9 1.453 8.554 1 8.003 1H1.997C1.453 1 1 1.446 1 1.997z"/></svg>
    </svg>
  );
};

ReminderCheckboxUncheckedRed.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default ReminderCheckboxUncheckedRed;
