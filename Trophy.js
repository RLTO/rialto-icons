
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Trophy = ({ size, onClick }) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 2.5h5V7a5.5 5.5 0 0 1-5.025 5.48 4.502 4.502 0 0 1-3.975 3.993v1.189l5 2V21.5h-13v-1.839l5-2v-1.189a4.502 4.502 0 0 1-3.975-3.992A5.5 5.5 0 0 1 .5 7V2.5h5v-2h11v2zm-11 3h-2V7a2.5 2.5 0 0 0 2 2.45V5.5zm11 0v3.95a2.5 2.5 0 0 0 2-2.45V5.5h-2z" fill="#F5A623" stroke="#FFF" fill-rule="evenodd"/></svg>
  </svg>
); 

Trophy.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default Trophy;
