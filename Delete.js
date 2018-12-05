
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Delete = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16"><path fill="#91A6B6" fill-rule="evenodd" d="M8 1V.997A.998.998 0 0 0 6.99 0H5.01C4.451 0 4 .453 4 .997V1H1.524C.682 1 0 1.677 0 2.516V3h12v-.464C12 1.688 11.321 1 10.476 1H8zM1.834 14.005C1.926 15.107 2.887 16 3.998 16h4.004c1.103 0 2.073-.902 2.164-1.995L11 4H1l.834 10.005zm.271-7.984c-.058-.517.32-.937.848-.937h.094c.526 0 .953.43.953.955V14.5h-.945l-.95-8.479zm7.79 0c.058-.517-.32-.937-.848-.937h-.094A.955.955 0 0 0 8 6.04V14.5h.945l.95-8.479zM5 6.133a1 1 0 1 1 2 0v7.734a1 1 0 1 1-2 0V6.133z"/></svg>
	</svg>
); 

Delete.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default Delete;
