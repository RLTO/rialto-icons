
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const FormRadioUnchecked = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><path id="a" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#FFF" xlinkHref="#a"/><path stroke="#DCE6ED" stroke-width="2" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14z"/></g></svg>
	</svg>
); 

FormRadioUnchecked.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default FormRadioUnchecked;
