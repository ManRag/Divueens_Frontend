import React from "react";
import { Link } from "react-router-dom";

const DropDown = ({ list }) => {
  return (
    <>
      <h4 class="menu_cat">{list.mainTitle}</h4>
      <ul>
        {list.links.map((item, i)=><li key={i}><Link to={item.link}>item.title</Link></li>)}
      </ul>
    </>
  );
};
