
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ListBlue = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="12" height="10"><path fill="#4DC9FF" fill-rule="evenodd" d="M0 1c0-.552.456-1 1.002-1h9.996a.999.999 0 1 1 0 2H1.002A.999.999 0 0 1 0 1zm0 4c0-.552.456-1 1.002-1h9.996a.999.999 0 1 1 0 2H1.002A.999.999 0 0 1 0 5zm0 4c0-.552.456-1 1.002-1h9.996a.999.999 0 1 1 0 2H1.002A.999.999 0 0 1 0 9z"/></svg>
	</svg>
); 

ListBlue.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default ListBlue;
