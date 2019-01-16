import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const UnderOffer = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16"><path fill="#91A6B6" fillRule="evenodd" d="M10.16 0L9.143 1H1.51a.5.5 0 0 0-.51.498v13.004c0 .278.224.498.5.498h11c.271 0 .5-.224.5-.501V4.17l1-.99V15c0 .552-.45.999-1.007.999H1.007A1.002 1.002 0 0 1 0 15V1c0-.552.445-1 .996-1h9.165zM3 10h8v1H3v-1zm0 2h8v1H3v-1zm1.689-3.213l.703-2.763 2.111 2.073-2.814.69zm4.57-6.5l2.11 2.073-3.334 3.218-2.111-2.072 3.334-3.219zm4.222-1.036a.723.723 0 0 1 0 1.036l-1.584 1.555-2.111-2.073L11.369.215a.756.756 0 0 1 1.056 0l1.056 1.036z"/></svg>
    </svg>
  );
};

UnderOffer.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default UnderOffer;
