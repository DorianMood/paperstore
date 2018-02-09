import React, { Component } from 'react';

import Review from '../review-card';

import content from '../content/reviews.jsx';

class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewContent: content
    }
  }

  render() {
    let { reviewContent } = this.state;
    let reviews = [];
    for (let i = 0; i < 4; i++) {
      reviews.push(
        <div className="col-md-3" key={ i }>
          <Review title={reviewContent[i].title} pic={reviewContent[i].pic} review={reviewContent[i].review}/>
        </div>
      );
    }

    return (
      <div className="container-fluid">
        <div className="row">
          { reviews }
        </div>
      </div>
    );
  }
}

export default Reviews;
