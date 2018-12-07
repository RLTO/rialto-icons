
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ProposalWhite = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16"><path fill="#FFF" fill-rule="evenodd" d="M1.007 16A1.002 1.002 0 0 1 0 15V1c0-.552.445-1 .996-1H11l3 3v12.001c0 .552-.45.999-1.007.999H1.007zm.493-1h11c.271 0 .5-.224.5-.501V4h-3V1H1.51a.5.5 0 0 0-.51.498v13.004c0 .278.224.498.5.498zM3 6h8v1H3V6zm0 3h8v1H3V9zm0 3h8v1H3v-1z"/></svg>
	</svg>
); 

ProposalWhite.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default ProposalWhite;
