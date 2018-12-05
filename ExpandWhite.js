
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ExpandWhite = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg width="12" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M0 5c0-.552.456-1 1.002-1h9.996a.999.999 0 1 1 0 2H1.002A.999.999 0 0 1 0 5zM6.356.356l2.288 2.288C8.84 2.84 8.78 3 8.51 3H3.491c-.263 0-.332-.16-.135-.356L5.644.356a.505.505 0 0 1 .712 0zm0 9.288a.505.505 0 0 1-.712 0L3.356 7.356C3.159 7.159 3.228 7 3.49 7h5.018c.271 0 .33.161.135.356L6.356 9.644z" fill="#FFF" fill-rule="evenodd"/></svg>
	</svg>
); 

ExpandWhite.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default ExpandWhite;
