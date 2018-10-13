import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-sm navbar-dark">
          <a className="navbar-brand logo-buzzmonitor" href="#">Buzzmonitor</a>
          <ul className="navbar-nav">
            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
              Monitoring
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Link 1</a>
            </div>
            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
              Customer Care
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Link 1</a>
            </div>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                Analytics
            </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Link 1</a>
              </div>
            </li>
          </ul>
        </nav>
        <div className="container">
          <div className="container-title">
            <h2 className="text-center">Buzzmonitor Admin</h2>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search"></input>
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">Search</button>
              </div>
            </div>
          </div>
          <div className="container-tab">
            <ul className="nav nav-tabs nav-fill nav-justified">
              <li className="nav-item">
                <a className="nav-link" href="#">USER</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">PROJECTS&COLLECT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">MODULES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">OTHER</a>
              </li>
            </ul>
            <div className="container-button text-right">
              <button className="btn btn-primary" type="button">Save</button>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
