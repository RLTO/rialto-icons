
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const NotUnderOffer = ({ size, onClick }) => (
	<svg style={getIconStyle(size)} onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16"><path fill="#91A6B6" fill-rule="evenodd" d="M5.032 1H1.51a.5.5 0 0 0-.51.498v13.004c0 .278.224.498.5.498h11c.271 0 .5-.224.5-.501v-5.53a1.995 1.995 0 0 0 1-.305v6.337c0 .552-.45.999-1.007.999H1.007A1.002 1.002 0 0 1 0 15V1c0-.552.445-1 .996-1h4.339c-.191.305-.292.651-.303 1zM3 10h8v1H3v-1zm0 2h8v1H3v-1zm10.643-5.744c.392.39.392 1.031 0 1.421-.39.39-1.024.39-1.415 0L9.99 5.436 7.722 7.707c-.394.39-1.033.39-1.427 0a1.014 1.014 0 0 1 0-1.43l2.268-2.272-2.239-2.231c-.39-.39-.39-1.031 0-1.421.391-.39 1.025-.39 1.415 0l2.239 2.241 2.3-2.301a1.016 1.016 0 0 1 1.426 0c.395.4.395 1.03 0 1.43l-2.3 2.302 2.239 2.231z"/></svg>
	</svg>
); 

NotUnderOffer.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default NotUnderOffer;