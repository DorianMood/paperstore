import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Cart.css';

class Cart extends Component {

  constructor(props) {
    super(props);
  }

  onShowCartClick() {
    console.log(this.props.store);
  }

  render() {
    return (
      <div onClick={ this.onShowCartClick.bind(this) } className="show-cart-button">
        <i className="fa fa-flag fa-2x pull-left"></i>
      </div>
      );
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({

  })
)(Cart);
