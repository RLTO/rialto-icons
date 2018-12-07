
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Email = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#91A6B6" fill-rule="evenodd" d="M5.5 8c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5c0 1.379-1.122 2.5-2.5 2.5A2.503 2.503 0 0 1 5.5 8zM0 8c0 4.412 3.589 8 8 8a7.954 7.954 0 0 0 4.522-1.392c.303-.208.427-.481.218-.786-.208-.303-.569-.282-.872-.074C10.765 14.505 9.36 15 8 15c-3.676 0-7-3.323-7-7 0-3.676 3.324-7 7-7s7 3.186 7 6.862V8.5c0 .863-1 2-1.899 2-1.564 0-1.564-1-1.564-1.862V8A3.541 3.541 0 0 0 8 4.463 3.541 3.541 0 0 0 4.463 8 3.54 3.54 0 0 0 8 11.537a3.53 3.53 0 0 0 2.708-1.267 2.897 2.897 0 0 0 2.393 1.267C14.7 11.537 16 10.098 16 8.5v-.638C16 3.451 12.411 0 8 0S0 3.589 0 8z"/></svg>
	</svg>
); 

Email.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default Email;