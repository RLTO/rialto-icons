
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const RadioChecked = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#4DC9FF" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-2A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>
	</svg>
); 

RadioChecked.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default RadioChecked;
