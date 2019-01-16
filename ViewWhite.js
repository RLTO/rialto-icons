import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const ViewWhite = (props) => {
  const { dimensions, onClick, size, ...otherProps } = props;
  return (
    <svg style={{ ...getIconStyle(size), ...dimensions }} onClick={onClick} {...otherProps}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10"><path fill="#FFF" fillRule="evenodd" d="M8 3.244c-.829 0-1.5.726-1.5 1.62 0 .896.671 1.621 1.5 1.621.828 0 1.5-.725 1.5-1.62 0-.895-.672-1.621-1.5-1.621zm7.999 1.723l-.002-.022-.001-.01a.081.081 0 0 0-.002-.017l-.002-.018v-.002a.688.688 0 0 0-.168-.364c-.51-.669-1.118-1.264-1.735-1.807C12.76 1.555 11.24.575 9.56.18A6.842 6.842 0 0 0 6.64.136c-.887.175-1.742.54-2.543.993C2.844 1.836 1.7 2.812.703 3.905a9.429 9.429 0 0 0-.536.63.732.732 0 0 0 0 .931c.51.669 1.118 1.264 1.735 1.808 1.33 1.171 2.85 2.15 4.53 2.545.97.228 1.946.238 2.921.045.887-.176 1.742-.54 2.543-.992 1.252-.708 2.396-1.683 3.393-2.777.184-.203.368-.409.536-.629a.69.69 0 0 0 .167-.364V5.1a.23.23 0 0 0 .003-.018l.002-.016v-.011L16 5.033 16 5l-.001-.033zm-8 3.139C6.344 8.106 5 6.655 5 4.865s1.343-3.242 3-3.242 3 1.452 3 3.242-1.344 3.241-3 3.241z"/></svg>
    </svg>
  );
};

ViewWhite.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default ViewWhite;
