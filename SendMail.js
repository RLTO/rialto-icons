
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const SendMail = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#91A6B6" fill-rule="evenodd" d="M0 8.571l4.571 1.715L5.143 16 8 12l4 4 4-16L0 8.571zm11.382 5.193L8 10.286 12.571 4 5.714 9.493l-2.95-1.107 11.5-6.161-2.882 11.54z"/></svg>
	</svg>
); 

SendMail.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default SendMail;
