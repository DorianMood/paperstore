import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../modal';

import './Cart.css';
import '../modal/min.css';

class Cart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      contactForm: false
    }
  }

  toggleModal() {
    this.setState((prevState) => {
      return { modal: !this.state.modal };
    });
  }

  toggleContactForm() {
    this.setState((prevState) => {
      return { contactForm: !this.state.contactForm };
    });
  }

  removeFromCart(id) {
    this.props.onRemoveItemFromCart(id);
  }

  buy() {
    fetch('http://localhost:5000/?telegram=${1}&whatsapp=${2}&vk=${3}&name={4}&comment=${5}').then(
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
            <button type="button" className="btn btn-success btn-rounded waves-effect" onClick={ this.toggleContactForm.bind(this) }>
              Купить
            </button>
            <Modal isOpen={ this.state.contactForm }>
              <div className="modal-header text-center">
                  <h4 className="modal-title w-100 font-bold">Как с вами связаться?</h4>
                  <button type="button" className="close" onClick={ this.toggleContactForm.bind(this) }>
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div className="modal-body mx-3">
                  <div className="md-form">
                      <i className="fa fa-user prefix grey-text"></i>
                      <input type="text" id="form3" className="form-control validate"/>
                      <label data-error="wrong" data-success="right">Как к вам обращаться</label>
                  </div>

                  <div className="md-form">
                      <i className="fa fa-vk prefix grey-text"></i>
                      <input type="email" id="form2" className="form-control validate"/>
                      <label>ВКонтакте</label>
                  </div>

                  <div className="md-form">
                      <i className="fa fa-telegram prefix grey-text"></i>
                      <input type="text" id="form32" className="form-control validate"/>
                      <label>Telegram</label>
                  </div>

                  <div className="md-form">
                      <i className="fa fa-whatsapp prefix grey-text"></i>
                      <input type="text" id="form32" className="form-control validate"/>
                      <label>Whatsapp</label>
                  </div>

                  <div className="md-form">
                      <i className="fa fa-pencil prefix grey-text"></i>
                      <textarea type="text" className="md-textarea"></textarea>
                      <label>Комментарий</label>
                  </div>

              </div>
              <div className="modal-footer d-flex justify-content-center">
                  <button className="btn btn-unique" onClick={ this.buy.bind(this) }>Поехали!<i className="fa fa-paper-plane-o ml-1"></i></button>
              </div>
            </Modal>
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
