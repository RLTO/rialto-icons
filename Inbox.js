
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Inbox = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg width="20" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M6.44 0h7.12a3 3 0 0 1 2.736 1.769L20 10v5a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-5l3.704-8.231A3 3 0 0 1 6.44 0zM2 15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.57l-3.528-7.84A1 1 0 0 0 13.56 2H6.44a1 1 0 0 0-.912.59L2 10.43V15zm0-4V9h6v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9h6v2h-4.17A3.001 3.001 0 0 1 11 13H9a3.001 3.001 0 0 1-2.83-2H2z" fill="#91A6B6" fill-rule="nonzero"/></svg>
	</svg>
); 

Inbox.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default Inbox;