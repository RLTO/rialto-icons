
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Executed = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path fill="#329798" fill-rule="evenodd" d="M12.494 21.76L8.32 17.43l.88-.991 3.336 3.461 10.31-9.66.834 1.04-11.186 10.48zM16 0C7.164 0 0 7.164 0 16s7.164 16 16 16c8.837 0 16-7.164 16-16S24.837 0 16 0z"/></svg>
  </svg>
); 

Executed.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default Executed;
