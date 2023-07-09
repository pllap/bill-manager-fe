import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card card-block mx-2" style={{ 'minWidth': 300 + 'px' }}>
        {
          this.props.menus.map(
            (menu, index) => (
              <div>
                <p className="card-text">{menu}</p>
              </div>
            )
          )
        }
      </div>
    );
  }
}

export default Card;
