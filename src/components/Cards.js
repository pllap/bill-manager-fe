import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from './Card';

class Cards extends React.Component {
  render() {
    const cards = [
      {
        menus: [
          'Bone',
          'Coke'
        ]
      },
      {
        menus: [
          'Pizza',
          'Coke'
        ]
      },
      {
        menus: [
          'Boneless',
          'Soda'
        ]
      },
      {
        menus: [
          'Bone'
        ]
      }
    ];
    console.log(this.props);
    return (
      <Container className="d-flex" style={{'height': 100 + 'px'}}>
        {
          cards.map(
            (card, index) => {
              return (
                <Card key={index} menus={card.menus} />
              );
            }
          )
        }
      </Container>
    )
  }
}

export default Cards;
