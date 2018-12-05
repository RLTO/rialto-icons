
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Deleteitem = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#91A6B6" fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm2.732-6.308a.75.75 0 1 1-1.061 1.066L7.99 9.077l-1.7 1.703a.762.762 0 0 1-1.07 0 .76.76 0 0 1 0-1.073l1.7-1.703L5.244 6.33a.75.75 0 1 1 1.061-1.066l1.679 1.682L9.707 5.22a.762.762 0 0 1 1.07 0 .76.76 0 0 1 0 1.073L9.053 8.019l1.679 1.673z"/></svg>
	</svg>
); 

Deleteitem.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default Deleteitem;
