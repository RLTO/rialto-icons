
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CategoryMeeting = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg width="17" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-7-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm14 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM7 14.5a.5.5 0 1 1-1 0v-2a2.5 2.5 0 1 1 5 0v2a.5.5 0 1 1-1 0v-2a1.5 1.5 0 0 0-3 0v2zM4.5 12a.5.5 0 1 1 0 1H2.765a1 1 0 0 1-.917-1.4l3.063-8a1 1 0 0 1 .916-.6h5.346a1 1 0 0 1 .916.6l3.063 8a1 1 0 0 1-.917 1.4H12.5a.5.5 0 1 1 0-1h1.735l-3.062-8H5.827l-3.062 8H4.5zM1 10a.5.5 0 1 1 0 1H.5a.5.5 0 0 1-.5-.5V5a1 1 0 0 1 1-1h.64a1 1 0 0 1 .948.684l.386 1.158a.5.5 0 1 1-.948.316L1.64 5H1v5zm15 0V5h-.64l-.386 1.158a.5.5 0 0 1-.948-.316l.386-1.158A1 1 0 0 1 15.36 4H16a1 1 0 0 1 1 1v5.5a.5.5 0 0 1-.5.5H16a.5.5 0 1 1 0-1z" fill="#91A6B6" fill-rule="evenodd"/></svg>
	</svg>
); 

CategoryMeeting.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default CategoryMeeting;
