
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const FormCheckboxUnchecked = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#DCE6ED" fill-rule="evenodd" d="M0 3.996A3.996 3.996 0 0 1 3.996 0h8.008A3.996 3.996 0 0 1 16 3.996v8.008A3.996 3.996 0 0 1 12.004 16H3.996A3.996 3.996 0 0 1 0 12.004V3.996zm2 .013v7.982C2 13.098 2.9 14 4.009 14h7.982A2.01 2.01 0 0 0 14 11.991V4.01A2.01 2.01 0 0 0 11.991 2H4.01A2.01 2.01 0 0 0 2 4.009z"/></svg>
	</svg>
); 

FormCheckboxUnchecked.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default FormCheckboxUnchecked;
