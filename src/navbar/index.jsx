import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-light blue-grey lighten-4">
				<img src="img/logo-full.png" alt="PaperScale" className="img-fluid" id="header-logo" />
			</nav>
			);
	}
}

export default Navbar;
