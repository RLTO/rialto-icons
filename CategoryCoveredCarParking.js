
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const CategoryCoveredCarParking = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M.587 2.742c0 .28.215.45.489.377l6.96-1.869 6.96 1.869c.27.072.488-.087.488-.377v-.234a.693.693 0 0 0-.489-.64L8.035 0l-6.96 1.869a.688.688 0 0 0-.488.64v.233zM1 14.992V10.5s0-.5.248-.5H.512c-.29 0-.47-.22-.424-.491l.003-.017c.09-.55.613-.992 1.166-.992h.24L2.987 5C3.484 4 6 4 6 4h4s2.497 0 2.994 1c.496 1 1.49 3.5 1.49 3.5h.24c.553 0 1.075.444 1.166.992l.003.017c.045.27-.145.491-.424.491h-.737c.249 0 .249.5.249.5v4.491c0 .559-.452 1.009-1.01 1.009h-.962A.997.997 0 0 1 12 15v-1H3.98v1c0 .556-.451 1-1.008 1h-.963C1.44 16 1 15.548 1 14.991zM2.49 8.5S5.268 9 8 9c2.732 0 5.49-.5 5.49-.5s-.993-2.5-1.281-3C11.92 5 10.186 5 8 5c-2.186 0-3.94 0-4.228.5-.288.5-1.282 3-1.282 3zm-.474 3.253a.52.52 0 0 0 .513.506h2.123a.374.374 0 0 0 .366-.375.723.723 0 0 0-.328-.567s-1.481-.921-2.156-.808c-.675.113-.518 1.244-.518 1.244zm11.986 0s.157-1.13-.518-1.244c-.675-.113-2.156.808-2.156.808a.723.723 0 0 0-.328.567c0 .201.164.375.365.375h2.123a.52.52 0 0 0 .514-.506z" fill="#91A6B6" fill-rule="evenodd"/></svg>
  </svg>
); 

CategoryCoveredCarParking.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default CategoryCoveredCarParking;
