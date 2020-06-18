import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Style/navbar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className='navbar-container'>
        <div className='navbar-wrapper'>
          <Link to='/'>Home</Link>
          <Link to='/tamingcalc'>Taming Calculator</Link>
        </div>
      </div>
    );
  }
}
