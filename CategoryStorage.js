
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CategoryStorage = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#91A6B6" fill-rule="evenodd" d="M0 14h16v1H0v-1zm1 1h2v1H1v-1zm12 0h2v1h-2v-1zM1 7.003A.996.996 0 0 1 2.003 6h4.994A.996.996 0 0 1 8 7.003v4.994A.996.996 0 0 1 6.997 13H2.003A.996.996 0 0 1 1 11.997V7.003zM9 2c0-.552.444-1 1-1h3c.552 0 1 .444 1 1v3c0 .552-.444 1-1 1h-3c-.552 0-1-.444-1-1V2zM2 1c0-.552.444-1 1-1h3c.552 0 1 .444 1 1v3c0 .552-.444 1-1 1H3c-.552 0-1-.444-1-1V1zm7 6.99c0-.546.451-.99.99-.99h4.02c.546 0 .99.451.99.99v4.02c0 .546-.451.99-.99.99H9.99a.996.996 0 0 1-.99-.99V7.99zM2 7v1h5V7H2zm1-6v1h3V1H3zm7 1v1h3V2h-3zm0 6v1h4V8h-4z"/></svg>
	</svg>
); 

CategoryStorage.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default CategoryStorage;
