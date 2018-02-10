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

  render() {

    if (!this.props.isOpen)
      return null;

    let popup = (
      <div className="modal" tabIndex="-1" id={ this.props.isOpen ? 'open' : 'close'} onClick={ this.props.onClose }>
        <div className="modal-dialog">
          <div className={ this.props.right ? "modal-content modal-right" : "modal-content" }>
            { this.props.children }
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
    store: state
  }),
  dispatch => ({
    onRemoveItemFromCart(index) {
      dispatch({ type: 'REMOVE_ITEM', index: index});
    }
  })
  )(Modal);
