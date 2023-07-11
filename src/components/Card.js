import React from "react";
import MenuItem from "./MenuItem";

const Card = ({ menus }) => {
  return (
    <div className="card card-block mx-2" style={{ 'minWidth': 300 + 'px' }}>
      {
        menus.map(menu => (
          <MenuItem key={menu} name={menu} />
        ))
      }
    </div>
  );
}

export default Card;
