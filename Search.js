
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Search = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#91A6B6" fill-rule="evenodd" d="M15.56 13.44l-4.396-4.397A5.962 5.962 0 0 0 12 6a6 6 0 1 0-6 6c1.112 0 2.15-.308 3.043-.835l4.396 4.396a1.5 1.5 0 1 0 2.122-2.121zM1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6z"/></svg>
	</svg>
); 

Search.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default Search;
