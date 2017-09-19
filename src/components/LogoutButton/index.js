import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ClearUser } from '../../actions/login.js';

import './logoutButton.scss';

class LogoutButton extends Component {

  handleLogout = () => {
    this.props.dispatch(ClearUser());
  };
  render() {
    return (
      <button
        onClick={this.handleLogout}
        className="ActionBar-button"
      >
        LOGOUT
      </button>
    );
  }
}

export default connect()(LogoutButton);

