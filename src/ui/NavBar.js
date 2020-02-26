import React, { Component } from 'react';
import {Link} from 'react-router'

class NavBar extends Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
             <Link to='/' className="nav-link">{this.props.logo}</Link>
              </li>
              <li className="nav-item">
              <Link to='/release' className="nav-link">Releases</Link>
              </li>
              <li className="nav-item dropdown">
              <Link to='/backlog' className="nav-link">Backlog</Link>
              </li>
              <li className="nav-item">
              <Link to='/sprint' className="nav-link">Sprint</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button clclassNameass="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      );
    }
  }
  
  export default NavBar;