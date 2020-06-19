import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className='navbar-container'>
        <div className='navbar-wrapper'>
          <div className='navbar-left'>
            <div className='nav-link-wrapper'>
              <Link to='/'>Home</Link>
            </div>
          </div>
          <div className='navbar-right'>
            <div className='nav-link-wrapper'>
              <Link to='/tamingcalc'>Taming Calculator</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
