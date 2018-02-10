import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../modal';

import './Card.css';

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
          isOpen={ this.state.modal }>
          <div className="modal-header">
            <h5 className="modal-title">{ this.props.title }</h5>
            <button type="button" className="close" onClick={ this.toggleModal.bind(this) }>
            <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            { this.props.shortText }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-info btn-rounded waves-effect"
              onClick={ this.toggleModal.bind(this) }>Закрыть</button>
            <button type="button" className="btn btn-outline-success btn-rounded waves-effect"
              onClick={ this.onClickBuy.bind(this) }>Купить</button>
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
    onAddItemToCart: (title, price) => {
      dispatch({ type: 'ADD_ITEM', payload: {title: title, price: price}});
    }
  })
)(Card);
