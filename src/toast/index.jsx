import React, { Component } from 'react';

import './Toast.css';

class Toast extends Component {
  render() {
    return (
      <div className="toast">
        <p className="mb-0">{ this.props.text }</p>
      </div>
    );
  }
}

export default Toast;
