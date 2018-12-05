
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const SubscribeBlue = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="12" height="10"><path fill="#4DC9FF" fill-rule="evenodd" d="M6 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM.273 2.415A7.976 7.976 0 0 1 6 0c2.245 0 4.275.925 5.727 2.415l-.707.707A6.98 6.98 0 0 0 6 1 6.98 6.98 0 0 0 .98 3.122l-.707-.707zm2.121 2.121A4.985 4.985 0 0 1 6 3c1.417 0 2.696.59 3.606 1.536l-.707.708A3.989 3.989 0 0 0 6 4c-1.14 0-2.17.478-2.899 1.244l-.707-.708z"/></svg>
	</svg>
); 

SubscribeBlue.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default SubscribeBlue;
