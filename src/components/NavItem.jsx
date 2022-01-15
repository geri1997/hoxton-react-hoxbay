import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ url, title, setSearchTerm }) => {
  
  return (
    <li>
      <Link onClick={e=>setSearchTerm("")} to={url}>{title}</Link>
    </li>
  );
};

export default NavItem;
