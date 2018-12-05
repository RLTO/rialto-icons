
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const PostTypeFileWhite = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fill-rule="evenodd" d="M.878 8.166c-1.17 1.275-1.17 3.34-.006 4.608 1.166 1.271 3.055 1.272 4.224-.002l6.327-6.895c.78-.85.787-2.219.004-3.072-.777-.847-2.032-.853-2.814 0L2.983 8.94c-.352.384-.528.959-.352 1.15.176.192.704 0 1.055-.383L9.318 3.57a.935.935 0 0 1 1.405.002 1.161 1.161 0 0 1-.001 1.536L4.396 12c-.78.85-2.038.86-2.82.007-.778-.847-.777-2.222.003-3.072L7.906 2.04c1.167-1.272 3.061-1.27 4.225-.003 1.166 1.271 1.162 3.335-.004 4.606L6.5 12.774c-.352.384-.528.96-.352 1.15.176.193.704 0 1.056-.383l5.632-6.138c1.553-1.692 1.549-4.44-.003-6.131C11.28-.423 8.761-.424 7.208 1.269L.878 8.166z"/></svg>
	</svg>
); 

PostTypeFileWhite.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default PostTypeFileWhite;
