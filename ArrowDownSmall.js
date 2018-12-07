
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ArrowDownSmall = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="10" height="6"><path fill="#91A6B6" fill-rule="evenodd" d="M10 .75C10 .336 9.68 0 9.286 0a.695.695 0 0 0-.496.21L4.998 4.191 1.256.261A.699.699 0 0 0 .714 0C.32 0 0 .336 0 .75c0 .201.076.384.199.519l-.002.002 4.286 4.5c.13.141.312.229.514.229H5a.696.696 0 0 0 .514-.23L9.8 1.27a.767.767 0 0 0 .2-.52z"/></svg>
	</svg>
); 

ArrowDownSmall.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default ArrowDownSmall;
