
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const DownloadGreen = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="11"><g fill="none" fill-rule="evenodd"><path fill="#329798" d="M1 10l.007-6-1-.003L0 11h14V4l-1 .003V10z"/><path stroke="#329798" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 4.5L7 7l2.5-2.5M7 7V1"/></g></svg>
	</svg>
); 

DownloadGreen.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default DownloadGreen;
