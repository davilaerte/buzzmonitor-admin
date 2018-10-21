import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    return (
      <li className="nav-item">
        <span className={this.props.activeTab === this.props.label ? "nav-link active" : "nav-link"} onClick={this.onClick}>{this.props.label}</span>
      </li>
    );
  }
}

export default Tab;