
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Signout = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#91A6B6" fill-rule="evenodd" d="M13.752 6.442a.748.748 0 0 1 0 1.115l-2.5 2.25A.749.749 0 0 1 10 9.25V8H7.01a1 1 0 1 1 0-2H10V4.75a.75.75 0 0 1 1.252-.558l2.5 2.25zM1 13h6.497c.27 0 .503.224.503.5 0 .268-.224.5-.5.5H.997C.453 14 0 13.55 0 12.993V1.007C0 .45.446 0 .997 0H7.5c.27 0 .5.224.5.5 0 .268-.225.5-.503.5H1v12z"/></svg>
	</svg>
); 

Signout.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default Signout;
