
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Close = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><path fill="#91A6B6" fill-rule="evenodd" d="M10 1.071A1.071 1.071 0 0 0 8.171.314L5 3.485 1.829.314A1.071 1.071 0 1 0 .314 1.829L3.484 5 .315 8.171a1.071 1.071 0 0 0 1.515 1.515L5 6.516l3.171 3.17a1.071 1.071 0 1 0 1.515-1.515L6.516 5l3.17-3.17A1.07 1.07 0 0 0 10 1.07z"/></svg>
	</svg>
); 

Close.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default Close;
