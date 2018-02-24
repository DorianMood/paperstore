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
              <h3>Сделано для вас</h3>
              <p>Мы предлагаем шаблоны и инструкции для того чтобы дать вам возможность превратить обыкновенную бумагу в замечательную 3D маску, которую вы можете сделать и украсить сами. Инструкции очень простые, и кто угодно сможет собрать красивые оригами, используя то, что мы поставляем в наборе. Вперед!</p>
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
