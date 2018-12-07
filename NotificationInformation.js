
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const NotificationInformation = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 20h20V0H0v20zm2-2h16V2H2v16zM9 7h2V5H9v2zm0 8h2V9H9v6z" fill="#FFF" fill-rule="evenodd"/></svg>
	</svg>
); 

NotificationInformation.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default NotificationInformation;
