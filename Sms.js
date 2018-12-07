
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Sms = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13"><path fill="#91A6B6" d="M2 0h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7l-3.146 3.146A.5.5 0 0 1 3 11.793V9H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm2.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3z"/></svg>
	</svg>
); 

Sms.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default Sms;
