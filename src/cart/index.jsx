import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

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
    if (!this.props.store.length) {
      toast("Корзина пуста.", { type: toast.TYPE.WARNING, autoClose: 2000 });
      return;
    }
    if (!(this.telegram.value || this.whatsapp.value || this.vk.value)) {
      toast("Заполните хоть один свой контакт.", { type: toast.TYPE.WARNING, autoClose: 2000 });
      return;
    }
    if (!this.name.value) {
      toast("Как вас зовут?", { type: toast.TYPE.WARNING, autoClose: 2000 });
      return;
    }
    let cart = this.props.store.map((item, index) => item.title).join(' ');
    //console.log(`${this.telegram.value} ${this.whatsapp.value} ${this.vk.value} ${this.name.value} ${this.comment.value}`);
    fetch(`https://api.paperscale.online/add?telegram=${this.telegram.value}&whatsapp=${this.whatsapp.value}&vk=${this.vk.value}&name=${this.name.value}&comment=${this.comment.value}&cart=${cart}`).then(
      response => {
        this.toggleContactForm();
        this.toggleModal();
        toast("Ждите! Мы уже вам пишем!", { type: toast.TYPE.SUCCESS, autoClose: 2000 });
        this.props.onClearCart();
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
          <i className="fa fa-shopping-bag fa-2x"></i>
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
                      <input type="text" id="form3" className="form-control validate"
                        ref={ (input) => this.name = input }/>
                      <label data-error="wrong" data-success="right">
                        Как к вам обращаться
                      </label>
                  </div>

                  <div className="md-form">
                      <i className="fa fa-vk prefix grey-text"></i>
                      <input type="text" id="form2" className="form-control validate"
                        ref={ (input) => this.vk = input }/>
                      <label>ВКонтакте</label>
                  </div>

                  <div className="md-form">
                      <i className="fa fa-telegram prefix grey-text"></i>
                      <input type="text" id="form32" className="form-control validate"
                        ref={ (input) => this.telegram = input }/>
                      <label>Telegram</label>
                  </div>

                  <div className="md-form">
                      <i className="fa fa-whatsapp prefix grey-text"></i>
                      <input type="text" id="form32" className="form-control validate"
                        ref={ (input) => this.whatsapp = input }/>
                      <label>Whatsapp</label>
                  </div>

                  <div className="md-form">
                      <i className="fa fa-pencil prefix grey-text"></i>
                      <textarea type="text" className="md-textarea"
                        ref={ (input) => this.comment = input }></textarea>
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
    },
    onClearCart() {
      dispatch({ type: 'CLEAR_CART'});
    }
  })
)(Cart);
