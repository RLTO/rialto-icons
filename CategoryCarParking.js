
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CategoryCarParking = ({ size, onClick }) => (
	<svg {...getIconStyle(size)} viewBox="0 0 16 16"  onClick={onClick}>
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12"><path fill="#91A6B6" fill-rule="evenodd" d="M1 10.991V6.5s0-.5.248-.5H.51c-.29 0-.47-.22-.424-.491l.003-.017c.09-.55.613-.992 1.166-.992h.24L2.986 1C3.483 0 6 0 6 0h4s2.497 0 2.994 1c.497 1 1.49 3.5 1.49 3.5h.24c.554 0 1.076.444 1.167.992l.002.017c.045.27-.144.491-.423.491h-.737c.248 0 .248.5.248.5v4.491c0 .559-.452 1.009-1.009 1.009h-.963A.997.997 0 0 1 12 11v-1H3.98v1c0 .556-.452 1-1.01 1h-.962C1.44 12 1 11.548 1 10.991zM2.49 4.5S5.267 5 8 5c2.732 0 5.49-.5 5.49-.5s-.993-2.5-1.281-3C11.92 1 10.186 1 7.999 1c-2.185 0-3.94 0-4.228.5-.288.5-1.281 3-1.281 3zm-.475 3.253a.52.52 0 0 0 .513.506h2.124a.374.374 0 0 0 .365-.375.723.723 0 0 0-.328-.567s-1.48-.921-2.156-.808c-.675.113-.518 1.244-.518 1.244zm11.987 0s.158-1.13-.518-1.244c-.675-.113-2.156.808-2.156.808a.723.723 0 0 0-.328.567c0 .201.164.375.366.375h2.123a.52.52 0 0 0 .513-.506z"/></svg>
	</svg>
); 

CategoryCarParking.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default CategoryCarParking;
