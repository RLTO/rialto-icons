
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Edit = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#91A6B6" fill-rule="evenodd" d="M10.258 2.287L2.924 9.506l2.111 2.072L12.37 4.36l-2.112-2.073zm4.223 0a.723.723 0 0 0 0-1.036L13.425.215a.756.756 0 0 0-1.056 0l-1.583 1.554 2.111 2.073 1.584-1.555zM16 15c0-.552-.445-1-1-1H1c-.552 0-1 .444-1 1 0 .552.445 1 1 1h14c.552 0 1-.444 1-1zM2.392 10.024l-.703 2.763 2.814-.69-2.111-2.073z"/></svg>
	</svg>
); 

Edit.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default Edit;
