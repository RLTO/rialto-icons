
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const DragDrop = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg width="40" height="41" xmlns="http://www.w3.org/2000/svg"><path d="M28 32.948a4.007 4.007 0 0 0 4 4.005c2.206 0 4-1.796 4-4.005a4.007 4.007 0 0 0-4-4.005c-2.206 0-4 1.796-4 4.005zM7.638 35.035l2.475 2.462a1 1 0 0 1-.003 1.42l-1.402 1.384a1 1 0 0 1-1.41-.006l-5.886-5.909a2 2 0 0 1 .005-2.828l5.873-5.86a1 1 0 0 1 1.416.005l1.42 1.433a1 1 0 0 1-.003 1.411L7.638 31.03h16.644c.892-4.005 3.994-6.04 7.718-6.04 4.418 0 8 3.554 8 7.98 0 4.424-3.582 8.03-8 8.03-3.724 0-6.826-3.963-7.718-5.965H7.638zM4 8.018a4.007 4.007 0 0 0 4 4.005c2.206 0 4-1.796 4-4.005a4.007 4.007 0 0 0-4-4.005c-2.206 0-4 1.796-4 4.005zm4 8a8 8 0 0 1-8-8.004C0 3.59 3.582 0 8 0c3.724 0 6.826 1.994 7.718 6h16.644l-2.48-2.469a1 1 0 0 1 0-1.416L31.293.707a1 1 0 0 1 1.414 0l5.88 5.879a2 2 0 0 1 .002 2.826l-5.881 5.896a1 1 0 0 1-1.416 0l-1.414-1.417a1 1 0 0 1 .002-1.415l2.482-2.472H15.718c-.892 4.005-3.994 6.014-7.718 6.014z" fill="#91A6B6" fill-rule="evenodd"/></svg>
	</svg>
); 

DragDrop.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default DragDrop;
