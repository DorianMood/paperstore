import React, { Component } from 'react';

class Review extends Component {

  render() {
    return (
        <div className="card testimonial-card">
          <div className="card-up indigo lighten-1"><img src={this.props.pic} alt={this.props.title} /></div>
          <div className="avatar">
            <img src={this.props.pic} className="rounded-circle" alt={this.props.title} />
          </div>
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <hr />
            <p>{this.props.review}</p>
          </div>
        </div>
      );
  }
}

export default Review;
