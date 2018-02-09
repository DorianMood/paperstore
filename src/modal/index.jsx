import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Modal.css';

class Modal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: this.props.isOpen
    }
  }

  close() {
    this.setState({isOpen: !this.state.isOpen});
  }

  onClickBuy() {
    this.props.onAddItemToCart(this.props.title, this.props.price);
  }

  render() {
    if (!this.props.isOpen)
      return null;

    let popup = (
      <div className="modal" tabIndex="-1" id={ this.props.isOpen ? 'open' : 'close'} onClick={ this.props.onClose }>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{ this.props.title }</h5>
              <button type="button" className="close" onClick={ this.props.onClose }>
              <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              { this.props.content }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-info btn-rounded waves-effect"
                onClick={ this.props.onClose }>Закрыть</button>

              <button type="button" className="btn btn-outline-success btn-rounded waves-effect"
                onClick={ this.onClickBuy.bind(this) }>Купить</button>
            </div>
          </div>
        </div>
      </div>
      );

    return (
      popup
    );
  }
}

export default connect(
  state => ({
    cartStore: state
  }),
  dispatch => ({
    onAddItemToCart: (title, price) => {
      dispatch({ type: 'ADD_ITEM', payload: {title: title, price: price}});
    }
  })
  )(Modal);
