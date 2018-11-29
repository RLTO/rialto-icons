
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const FileTypePpt = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg width="21" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M1.007 16A1.002 1.002 0 0 1 0 15V1c0-.552.445-1 .996-1H11l3 3v12.001c0 .552-.45.999-1.007.999H1.007zm.493-1h11c.271 0 .5-.224.5-.501V4h-3V1H1.51a.5.5 0 0 0-.51.498v13.004c0 .278.224.498.5.498z" fill="#91A6B6"/><g transform="translate(5 5)"><rect fill="#91A6B6" width="16" height="9" rx="2"/><rect fill="#EDF2F6" x="1" y="1" width="14" height="7" rx="1"/><text font-family="RobotoMono-Bold, Roboto Mono" font-size="7" font-weight="bold" fill="#91A6B6"><tspan x="1.699" y="7">PPT</tspan></text></g></g></svg>
  </svg>
); 

FileTypePpt.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default FileTypePpt;
