import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import './Login.scss';

export default class Login extends Component {
  redirectToDashboard = () => {
    browserHistory.push('/dashboard');
  }
  render() {
    return (
      <div className="container">
        <div className="row loginWrapper">
          <div className="col-md-4 col-xs-10">
            <div className="well clearfix">
              <h1>Login</h1>
              <p className="text-muted">Sign In to your account</p>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Username" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-primary pull-right"
                  onClick={this.redirectToDashboard}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
