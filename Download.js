
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Download = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="12" height="10"><g fill="none" fill-rule="evenodd"><path fill="#91A6B6" d="M1 9l.007-6-1-.003L0 10h12V3l-1 .003V9z"/><path stroke="#91A6B6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.5 4.5L6 7l2.5-2.5M6 7V1"/></g></svg>
	</svg>
); 

Download.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default Download;
