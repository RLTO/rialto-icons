
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const FormReminderCheckboxChecked = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><path fill="#91A6B6" fill-rule="evenodd" d="M2 0h6c1.113 0 2 .895 2 2v6c0 1.113-.895 2-2 2H2c-1.113 0-2-.895-2-2V2C0 .887.895 0 2 0zM1 1.997v6.006c0 .544.446.997.997.997h6.006C8.547 9 9 8.554 9 8.003V1.997C9 1.453 8.554 1 8.003 1H1.997C1.453 1 1 1.446 1 1.997zm3.229 3.275l-.543-.543a.727.727 0 0 0-1.029 1.028l1.057 1.057a.728.728 0 0 0 1.029 0l2.6-2.6a.727.727 0 1 0-1.029-1.028L4.23 5.272z"/></svg>
  </svg>
); 

FormReminderCheckboxChecked.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default FormReminderCheckboxChecked;
