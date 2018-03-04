import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

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
    toast("Добавлено!", { type: toast.TYPE.INFO, autoClose: 2000 });
  }

  render() {
    return (
      <div className="card">
        <img className="img-fluid" src={ this.props.item.pic } alt={ this.props.item.title } />
        <div className="card-body">
          <h4 className="card-title">{ this.props.item.title }</h4>
          <div className="inline-block">
            <p className="card-text"><b>Сложность:</b> { this.props.item.complexity }</p>
            <p className="card-text"><b>Оринтеровочное время:</b> { this.props.item.time }</p>
            <p className="card-text"><b>Цена:</b> { this.props.item.price } руб.</p>
            </div>
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
              <div className="row">
                <div className="col-md-5">
                  <img src={ this.props.item.pic } alt={this.props.item.title} className='card-modal-img' />
                </div>
                <div className="col-md-7 top-content-text">
                  <p>
                    { this.props.item.shortText } <br/>
                    <b>Сложность:</b> { this.props.item.complexity }.<br/>
                    <b>Оринтеровочное время:</b> { this.props.item.time }.<br/>
                    <b>В комплекте:</b> { this.props.item.accessories }.<br/>
                    <b>Размеры:</b> { this.props.item.scales } см.<br/>
                    <b>Рекомендуемый возраст:</b> { this.props.item.age }.<br/>
                    <b>Цвета:</b> { this.props.item.colors }
                  </p>
                </div>
              </div>
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
