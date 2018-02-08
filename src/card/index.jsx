import React, { Component } from 'react';
import Modal from '../modal';

class Cards extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false
    }
  }

  modal() {
    this.setState({modal: !this.state.modal});
  }

  render() {
    return (
      <div className="card">
        <img className="img-fluid" src="img/card-img.jpg" alt="Товар" />
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" className="btn btn-outline-info btn-rounded waves-effect" onClick={this.modal.bind(this)}>Подробнее</button>
          <button type="button" className="btn btn-outline-success btn-rounded waves-effect">Купить</button>
        </div>
        <Modal title='Товар' content='контент' isOpen={this.state.modal}/>
      </div>
      );
  }
}

export default Cards;
