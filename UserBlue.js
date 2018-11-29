
import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const UserBlue = ( {size, onClick} ) => (
  <svg style={getIconStyle(size)} onClick={onClick}>
  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.908 11.197c-1.244-.639-.765-.15-2.292-.804-1.528-.652-1.89-.866-1.89-.866l-.013-1.496s.572-.448.75-1.864c.358.107.478-.432.498-.776.021-.332.211-1.368-.226-1.276.09-.692.16-1.317.128-1.648C10.753 1.304 10.12 0 8.113 0 6.104 0 5.252 1.305 5.14 2.467c-.028.331.036.956.53 1.65-.842-.094-.654.944-.63 1.276.017.344.135.885.493.778.178 1.416.75 1.867.75 1.867l-.015 1.505s-.361.227-1.889.88c-1.527.654-1.048.135-2.292.774C.12 12.207 0 15.237 0 15.237S.5 16 1 16h14c.5 0 1-.76 1-.76s-.126-3.034-2.092-4.043z" fill="#4DC9FF" fill-rule="evenodd"/></svg>
  </svg>
); 

UserBlue.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default UserBlue;
