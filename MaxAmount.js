
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const MaxAmount = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg width="4" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M4 .714c0 .193-.08.367-.21.496L1.809 3.002l1.93 1.742c.16.131.261.325.261.542C4 5.68 3.664 6 3.25 6a.767.767 0 0 1-.519-.199L.23 3.517a.698.698 0 0 1 0-1.031L2.73.2A.77.77 0 0 1 3.25 0c.414 0 .75.32.75.714zM3.25 6.5a.75.75 0 0 1 0 1.5H.752a.75.75 0 1 1 0-1.5H3.25z" fill="#91A6B6" fill-rule="evenodd"/></svg>
	</svg>
); 

MaxAmount.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default MaxAmount;
