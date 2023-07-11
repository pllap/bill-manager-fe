import React from "react";

const Card = ({ menus }) => {
  return (
    <div className="card card-block mx-2" style={{ 'minWidth': 300 + 'px' }}>
      {
        menus.map(menu => (
            <div key={menu} className="card-text">{menu}</div>
          )
        )
      }
    </div>
  );
}

export default Card;
