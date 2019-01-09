import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Merge = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#91A6B6" fill-rule="evenodd" d="M1.34 11.153l1.052 1.052L.296 14.3a.99.99 0 1 0 1.402 1.402l2.096-2.096 1.051 1.051c.35.35.674-.26.701-.7v-2.51a.994.994 0 0 0-.995-.995h-2.51c-.44.027-1.05.35-.7.7zm9.113-9.111c.027-.44.35-1.052.7-.701l1.052 1.051L14.3.296a.99.99 0 1 1 1.402 1.402l-2.096 2.096 1.051 1.051c.35.35-.26.674-.7.701h-2.51a.994.994 0 0 1-.995-.995v-2.51zM9.4 9.402a1.982 1.982 0 1 0-2.803-2.804A1.982 1.982 0 0 0 9.4 9.4z"/></svg>
    </svg>
  );
};

Merge.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default Merge;
