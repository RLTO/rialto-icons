
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const PostTypeViewingWhite = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#FFF" fill-rule="evenodd" d="M3.5 4c.276 0 .5-.215.5-.49V.49A.5.5 0 0 0 3.5 0c-.276 0-.5.215-.5.49v3.02a.5.5 0 0 0 .5.49zm2.782 3.75H6.28h.002-.001zM12.5 4a.5.5 0 0 1-.5-.49V.49c0-.275.224-.49.5-.49a.5.5 0 0 1 .5.49v3.02c0 .275-.224.49-.5.49zm-4 6H11v1H8.5v2.5h-1V11H5v-1h2.5V7.5h1V10zM14 2v1.5c0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5V2H5v1.5C5 4.328 4.334 5 3.5 5 2.672 5 2 4.334 2 3.5V2H1c-.552 0-1 .45-1 1.007v11.986C0 15.55.445 16 1 16h14c.552 0 1-.45 1-1.007V3.007C16 2.45 15.556 2 15 2h-1zm1 13H1V6h14v9z"/></svg>
	</svg>
); 

PostTypeViewingWhite.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default PostTypeViewingWhite;
