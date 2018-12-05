
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const RewardsCommission = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="13" height="16"><path fill="#91A6B6" fill-rule="evenodd" d="M6.5 0C10.09 0 13 2.866 13 6.4 13 9.934 6.5 16 6.5 16S0 9.934 0 6.4 2.91 0 6.5 0zM4 10v1h1v-1H4zm2 0v1h1v-1H6zm2 0v1h1v-1H8zM4.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm4 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-.393-4.817L4.11 8.185l.786.623 4-4.996-.788-.63z"/></svg>
	</svg>
); 

RewardsCommission.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default RewardsCommission;
