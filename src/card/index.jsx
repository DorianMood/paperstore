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
    this.props.onAddItemToCart(this.props.item.title, this.props.item.price);
  }

  render() {
    return (
      <div className="card">
        <img className="img-fluid" src={ this.props.item.pic } alt={ this.props.item.title } />
        <div className="card-body">
          <h4 className="card-title">{ this.props.item.title }</h4>
          <p className="card-text">{ this.props.item.shortText }</p>
          <button type="button" className="btn btn-outline-info btn-rounded waves-effect"
            onClick={ this.toggleModal.bind(this) }>Подробнее</button>
          <button type="button" className="btn btn-outline-success btn-rounded waves-effect"
            onClick={ this.onClickBuy.bind(this) }>Купить</button>
        </div>
        <Modal
          isOpen={ this.state.modal }>
          <div className="modal-header">
            <h5 className="modal-title">{ this.props.item.title }</h5>
            <button type="button" className="close" onClick={ this.toggleModal.bind(this) }>
            <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="top-content">
              <p>
                <img src={ this.props.item.pic } alt={this.props.item.title} className='card-modal-img' />
                { this.props.item.shortText }
              </p>
            </div>
            <div className="bottom-content">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span>Сложность: { this.props.item.complexity }</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span>Оринтеровочное время: { this.props.item.time }</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span>В комплекте: { this.props.item.accessories }</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span>Размеры: { this.props.item.scales } см</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span>Рекомендуемый возраст: { this.props.item.age }</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span>Цвета: { this.props.item.colors }</span>
                </li>
              </ul>
            </div>
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
