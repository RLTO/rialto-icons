
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ArrowLeft = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14"><path fill="#91A6B6" fill-rule="evenodd" d="M7.72 12.306L2.412 6.998l5.24-5.24A.999.999 0 0 0 7 0a.995.995 0 0 0-.692.278L6.306.276l-6 6a.997.997 0 0 0-.306.72V7c0 .283.117.538.306.72l6 6a1 1 0 0 0 1.414-1.414z"/></svg>
	</svg>
); 

ArrowLeft.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default ArrowLeft;