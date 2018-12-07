
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const NotificationsInactive = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="18"><path fill="#DCE6ED" fill-rule="evenodd" d="M14 12V6c0-2.69-2.31-5-5-5a.97.97 0 0 0-1-1 .97.97 0 0 0-1 1C4.31 1 2 3.31 2 6v6a.97.97 0 0 1-1 1c-.576 0-1 .38-1 1 0 .533.467 1 1 1h14c.533 0 1-.467 1-1 0-.62-.424-1-1-1a.97.97 0 0 1-1-1zm-4 4.043H6C6 17.196 6.847 18 8 18s2-.804 2-1.957z"/></svg>
	</svg>
); 

NotificationsInactive.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default NotificationsInactive;
