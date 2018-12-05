
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const NotificationWarning = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h20v20H0V0zm2 2h16v16H2V2zm7 11h2v2H9v-2zm0-8h2v6H9V5z" fill="#FFF" fill-rule="evenodd"/></svg>
	</svg>
); 

NotificationWarning.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default NotificationWarning;
