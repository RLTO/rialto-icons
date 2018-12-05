
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Call = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#91A6B6" d="M10.573 9.501c.77-.77 2.02-.77 2.789 0l1.56 1.562c.77.77.77 2.018 0 2.788l-.855.857a2.708 2.708 0 0 1-3.408.342A34.724 34.724 0 0 1 .95 5.341a2.705 2.705 0 0 1 .343-3.408l.856-.856c.77-.77 2.019-.77 2.789 0L6.5 2.64c.769.77.769 2.017 0 2.788l-.198.198a34.653 34.653 0 0 0 4.073 4.074l.198-.198zm2.428-5.998V6.74c0 .276-.155.348-.347.156L9.106 3.347C8.92 3.161 8.984 3 9.262 3h3.236c.275 0 .503.225.503.503z"/></svg>
	</svg>
); 

Call.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default Call;
