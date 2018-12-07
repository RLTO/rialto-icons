
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Separator = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="3" height="3"><circle cx="1.5" cy="1.5" r="1.5" fill="#91A6B6" fill-rule="evenodd"/></svg>
	</svg>
); 

Separator.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default Separator;
