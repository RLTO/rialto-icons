
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ArrowConvert = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg width="14" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 0l3.292 3.279a1 1 0 0 1 .002 1.414L10 8 8.5 6.5 10 5H2.5a.5.5 0 0 0-.5.5V7a1 1 0 1 1-2 0V5.5A2.5 2.5 0 0 1 2.5 3H10L8.5 1.5 10 0zM4 16L.708 12.721a1 1 0 0 1-.002-1.414L4 8l1.5 1.5L4 11h7.5a.5.5 0 0 0 .5-.5V9a1 1 0 0 1 2 0v1.5a2.5 2.5 0 0 1-2.5 2.5H4l1.5 1.5L4 16z" fill="#91A6B6" fill-rule="evenodd"/></svg>
	</svg>
); 

ArrowConvert.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default ArrowConvert;
