
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Dashboard = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 17.982c-4.059 0-7.394-3.032-7.904-6.954L6 11.036v-.007l2.417-2.437 3.282 5.627L14.907 11h3.018A7.957 7.957 0 0 1 10 17.982m0-16.018A7.971 7.971 0 0 1 17.936 9H14v.048l-1.96 1.995-2.247-3.866.006-.005L8.754 5.38 7.342 6.795l.009-.006L5.122 9H2.064A7.971 7.971 0 0 1 10 1.964M10 0C4.477 0 0 4.478 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.522-4.477-10-10-10" fill="#91A6B6" fill-rule="nonzero"/></svg>
	</svg>
); 

Dashboard.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default Dashboard;
