
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const SeparatorTime = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="3" height="10"><path fill="#91A6B6" fill-rule="evenodd" d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
	</svg>
); 

SeparatorTime.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default SeparatorTime;
