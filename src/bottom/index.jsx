import React, { Component } from 'react';
import './Bottom.css';

class Bottom extends Component {
  render() {
    return (
      <footer className="page-footer mdb-color lighten-3 center-on-small-only pt-0">
      <div className="container">
      <hr className="rgba-white-light" id="top" />
      <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
      <div className="col-md-8 col-12 mt-5">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
      aut fugit, sed quia consequuntur.</p>
      </div>
      </div>
      <hr className="clearfix d-md-none rgba-white-light" id="bottom" />
      </div>
      <div className="footer-copyright">
      <div className="container-fluid">
      <a href="https://vk.com/paperscale"> PaperScale </a>
      </div>
      </div>
      </footer>
      );
  }
}

export default Bottom;
