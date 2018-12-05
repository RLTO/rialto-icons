
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Incentives = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.832 1.555l-8 12a1 1 0 1 1-1.664-1.11l8-12a1 1 0 0 1 1.664 1.11zm1.29 11.566A3 3 0 1 1 8.878 8.88a3 3 0 0 1 4.242 4.242zm-2.83-2.828a1 1 0 1 0 1.415 1.414 1 1 0 0 0-1.414-1.414zM5.123 5.12A3 3 0 1 1 .878.88 3 3 0 0 1 5.12 5.12zm-2.83-2.828a1 1 0 1 0 1.415 1.414 1 1 0 0 0-1.414-1.414z" fill="#91A6B6" fill-rule="nonzero"/></svg>
	</svg>
); 

Incentives.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default Incentives;
