import React, { Component } from 'react';

import './actionbar.scss';

class ActionBar extends Component {
  render() {
    return (
      <div className="ActionBar">
        {this.props.children}
      </div>
    );
  }

}

export default ActionBar;

