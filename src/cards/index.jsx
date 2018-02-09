import React, { Component } from 'react';

import Card from '../card';
import cardsContent from '../content/cards.jsx';

class Cards extends Component {
  render() {

    let cardsElement = cardsContent.map( (item, index) => (
      <div className="col-md-4" key={ index }>
          <Card
            pic={ item.pic }
            title={ item.title }
            shortText={ item.shortText }
            price={ item.price } />
        </div>
      ));

    return (
      <div className="container">
        <div className="row">
          { cardsElement }
        </div>
      </div>
      );
  }
}

export default Cards;
