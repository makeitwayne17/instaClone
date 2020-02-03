import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class TopHeader extends Component {
  render() {
    return (
      /* Navagation bar from on the top of the page */
      <div className="navbar">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">
            <img alt="" src="./instaLogo.png" className="logoimg" />
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default TopHeader;
