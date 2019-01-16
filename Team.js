import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const Team = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 7.879c.262-.396.414-.87.414-1.379 0-.517-.157-.998-.426-1.396l2.26-2.26a1.5 1.5 0 1 0-.697-.717L10.86 4.403A2.488 2.488 0 0 0 9.5 4c-.51 0-.983.152-1.379.414L5.854 2.147a1.5 1.5 0 1 0-.707.707L7.414 5.12C7.152 5.517 7 5.991 7 6.5c0 .502.148.97.403 1.36l-5.276 5.277a1.5 1.5 0 1 0 .717.697l5.26-5.26c.266.18.57.31.896.376v4.135a1.5 1.5 0 1 0 1 0V8.95c.32-.065.616-.19.879-.364l1.267 1.267a1.5 1.5 0 1 0 .707-.707L11.586 7.88z" fill="#91A6B6" fillRule="evenodd"/></svg>
    </svg>
  );
};

Team.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default Team;
