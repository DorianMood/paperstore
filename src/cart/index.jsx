import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../modal';

import './Cart.css';

class Cart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false
    }
  }

  toggleModal() {
    this.setState({modal: !this.state.modal});
  }

  removeFromCart(id) {
    this.props.onRemoveItemFromCart(id);
  }

  buy() {
    fetch('https://api.telegram.org/bot534974561:AAFMghBAuSgfB7_L8DdP3bOZnrZGzNMklyk/getMe').then(
      response => {
        console.log(response);
      });
  }

  render() {

    let summary = 0;
    for (let i = 0; i < this.props.store.length; i++) {
      summary += this.props.store[i].price;
    }

    return (
      <div>
        <div onClick={ this.toggleModal.bind(this) } className="show-cart-button">
          <i className="fa fa-shopping-bag fa-2x pull-left"></i>
        </div>
        <Modal
          right={ true }
          isOpen={ this.state.modal }>
          <div className="modal-header">
            <h5 className="modal-title">Корзина</h5>
            <button type="button" className="close" onClick={ this.toggleModal.bind(this) }>
            <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ul className="list-group">
            { this.props.store.map((item, index) => (
              <li key={ index } className="list-group-item d-flex justify-content-between align-items-center">
                { item.title }
                <span className="badge badge-primary badge-pill">{ item.price }</span>
                <button type="button" className="close" key={ index } onClick={ this.removeFromCart.bind(this, index) }>
                  <span>&times;</span>
                </button>
              </li>
            )) }
            </ul>
          </div>
          <div className="modal-footer">
            <div className="cart-item">Сумма : { summary }</div>
            <button type="button" className="btn btn-success btn-rounded waves-effect" onClick={ this.buy.bind(this) }>
              Купить
            </button>
          </div>
        </Modal>
      </div>
      );
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    onRemoveItemFromCart(index) {
      dispatch({ type: 'REMOVE_ITEM', index: index});
    }
  })
)(Cart);
