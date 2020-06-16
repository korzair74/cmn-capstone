import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className='NavBar'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/tamingcalc'>Taming Calculator</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
