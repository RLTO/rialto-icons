
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Link = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><path fill="#91A6B6" fill-rule="evenodd" d="M9.452 4.079L8.53 5c-.575.576-1.43.691-2.124.36L8.53 3.236a.623.623 0 0 0 0-.883l-.881-.883a.623.623 0 0 0-.883 0L4.64 3.595A1.867 1.867 0 0 1 5 1.47l.922-.922a1.872 1.872 0 0 1 2.647 0l.883.882c.73.732.73 1.917 0 2.649zM3.236 6.764a.623.623 0 0 1 0-.882l2.647-2.647a.623.623 0 1 1 .882.882L4.118 6.764a.623.623 0 0 1-.882 0zm-1.766.883l.883.883a.623.623 0 0 0 .882 0l2.126-2.126c.33.696.215 1.55-.36 2.126l-.844.921a1.872 1.872 0 0 1-2.648 0l-.96-.96a1.873 1.873 0 0 1 0-2.648L1.468 5a1.868 1.868 0 0 1 2.127-.36L1.47 6.764a.625.625 0 0 0 0 .883z"/></svg>
	</svg>
); 

Link.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default Link;