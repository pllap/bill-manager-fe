import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from './Card';

class Cards extends React.Component {
  render() {
    return (
      <Container className="d-flex" style={{'height': 100 + 'px'}}>
        <Card />
      </Container>
    )
  }
}

export default Cards;
