import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label
    }
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <div>
        <ul className="nav nav-tabs nav-justified">
          {this.props.children.map((child) =>
            <Tab activeTab={this.state.activeTab}
              key={child.props.label}
              label={child.props.label}
              onClick={this.onClickTabItem} />)}
        </ul>
        <div className="tab-content">
          <div className="container-inputs">
            {this.props.children.map((child) => child.props.label !== this.state.activeTab ? undefined : child.props.children)}
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;