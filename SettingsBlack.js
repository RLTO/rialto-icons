
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const SettingsBlack = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16"><path fill="#152435" fill-rule="evenodd" d="M1.5 6C.672 6 0 6.674 0 7.5v2c0 .828.666 1.5 1.5 1.5.828 0 1.5-.674 1.5-1.5v-2C3 6.672 2.334 6 1.5 6zm5 2C5.672 8 5 8.674 5 9.5v2c0 .828.666 1.5 1.5 1.5.828 0 1.5-.674 1.5-1.5v-2C8 8.672 7.334 8 6.5 8zm6-4c-.828 0-1.5.674-1.5 1.5v2c0 .828.666 1.5 1.5 1.5.828 0 1.5-.674 1.5-1.5v-2c0-.828-.666-1.5-1.5-1.5zm-11-4c-.25 0-.5.5-.5.5V5h1V.5S1.75 0 1.5 0zm5 0c-.25 0-.5.5-.5.5V7h1V.5S6.75 0 6.5 0zm6 0c-.25 0-.5.5-.5.5V3h1V.5s-.25-.5-.5-.5zm-11 16c.25 0 .5-.5.5-.5V12H1v3.5s.25.5.5.5zm5 0c.25 0 .5-.5.5-.5V14H6v1.5s.25.5.5.5zm6 0c.25 0 .5-.5.5-.5V10h-1v5.5s.25.5.5.5z"/></svg>
	</svg>
); 

SettingsBlack.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default SettingsBlack;
