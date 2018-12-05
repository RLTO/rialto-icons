
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CategoryLand = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg width="16" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M4.583 6l.334 1H3.52a.75.75 0 0 0-.702.487l-1.191 3.175A.25.25 0 0 0 1.86 11h12.278a.25.25 0 0 0 .234-.338l-1.19-3.175A.75.75 0 0 0 12.48 7h-1.397l.334-1h1.141a2 2 0 0 1 1.898 1.368l1.105 3.316A1 1 0 0 1 14.613 12H1.387a1 1 0 0 1-.948-1.316l1.105-3.316A2 2 0 0 1 3.442 6h1.141zM8 9c-.333 0-.61-.167-.83-.5C6.214 7.119 5 4.16 5 3a3 3 0 1 1 6 0c0 1.159-1.216 4.118-2.17 5.5-.22.333-.497.5-.83.5zm0-1c1-1.667 1.667-3.333 2-5 .206-1.031-.895-2-2-2s-2.206.97-2 2c.333 1.667 1 3.333 2 5zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#91A6B6" fill-rule="evenodd"/></svg>
	</svg>
); 

CategoryLand.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default CategoryLand;
