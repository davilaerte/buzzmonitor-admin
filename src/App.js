import React, { Component } from 'react';
import TabForm from './components/TabForm';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faPlusSquare, faMinusSquare);

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-sm">
          <span className="navbar-brand logo-buzzmonitor">Buzzmonitor</span>
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link-bar">
                Monitoring
                <span className="drop-down-arrow">
                  <span className="arrow-down"></span>
                </span>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link-bar">
                Customer Care
                <span className="drop-down-arrow">
                  <span className="arrow-down"></span>
                </span>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link-bar">
                Analytics
                <span className="drop-down-arrow">
                  <span className="arrow-down"></span>
                </span>
              </span>
            </li>
          </ul>
        </nav>
        <div className="container">
          <div className="container-title">
            <h2 className="text-center">Buzzmonitor Admin</h2>
            <div className="row justify-content-md-center">
              <div className="col-sm-6">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search"></input>
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TabForm />
        </div>
      </div >
    );
  }
}

export default App;
