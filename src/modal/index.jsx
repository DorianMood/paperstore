import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    }
  }

  close() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {

    let popup = (
      <div className="modal" tabIndex="-1" id={this.state.isOpen ? 'open' : 'close'}>
      <div className="modal-dialog">
      <div className="modal-content">
      <div className="modal-header">
      <h5 className="modal-title">{this.props.title}</h5>
      <button type="button" className="close" onClick={this.close.bind(this)}>
      <span>&times;</span>
      </button>
      </div>
      <div className="modal-body">{this.props.content}</div>
      <div className="modal-footer">
      <button type="button" className="btn btn-secondary">Close</button>
      <button type="button" className="btn btn-primary">Save changes</button>
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

export default Modal;
