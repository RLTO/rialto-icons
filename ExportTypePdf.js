
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ExportTypePdf = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="23" height="13"><path fill="#91A6B6" fill-rule="evenodd" d="M3.007 0h16.986A2.996 2.996 0 0 1 23 2.999V10A3.003 3.003 0 0 1 19.993 13H3.007A2.996 2.996 0 0 1 0 10.001V3A3.003 3.003 0 0 1 3.007 0zm-.012 1C1.893 1 1 1.9 1 2.992v7.016A2 2 0 0 0 2.995 12h17.01C21.107 12 22 11.1 22 10.008V2.992A2 2 0 0 0 20.005 1H2.995zM16 6V4h4V3h-5v7h1V7h3V6h-3zM3 5v5h1V7h1.995a2 2 0 0 0 0-4H3v2zm1-1v2h2.001A.997.997 0 0 0 7 5c0-.552-.443-1-.999-1H4zm5-1v7h2.995A1.998 1.998 0 0 0 14 7.994V5.006A2.003 2.003 0 0 0 11.995 3H9zm1 1v5h2.001A.997.997 0 0 0 13 8V5c0-.552-.443-1-.999-1H10z"/></svg>
	</svg>
); 

ExportTypePdf.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default ExportTypePdf;