import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../modal';

class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false
    }
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onClickBuy() {
    this.props.onAddItemToCart(this.props.title, this.props.price);
  }

  render() {
    return (
      <div className="card">
        <img className="img-fluid" src={ this.props.pic } alt={ this.props.title } />
        <div className="card-body">
          <h4 className="card-title">{ this.props.title }</h4>
          <p className="card-text">{ this.props.shortText }</p>
          <button type="button" className="btn btn-outline-info btn-rounded waves-effect"
            onClick={ this.toggleModal.bind(this) }>Подробнее</button>
          <button type="button" className="btn btn-outline-success btn-rounded waves-effect"
            onClick={ this.onClickBuy.bind(this) }>Купить</button>
        </div>
        <Modal
          title={ this.props.title }
          content={ this.props.shortText }
          isOpen={ this.state.modal }
          price={ this.props.price }
          onClose={ this.toggleModal.bind(this) }/>
      </div>
      );
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    onAddItemToCart: (title, price) => {
      dispatch({ type: 'ADD_ITEM', payload: {title: title, price: price}});
    }
  })
)(Card);
