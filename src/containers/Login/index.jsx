import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import { loginSend, loginCheck } from '../../actions/login.js';
import './Login.scss';

class Login extends Component {

  state = {
    login: '',
    password: ''
  };


  componentWillMount() {
    this.props.dispatch(loginCheck());
    if (this.props.data) this.redirectToDashboard();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) this.redirectToDashboard();
  }

  redirectToDashboard = () => {
    browserHistory.push('/dashboard');
  };

  checkField = () => !(this.state.login && this.state.password);

  handleLogin = (e) => {
    this.setState({
      login: e.target.value
    });
  };

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  submitLoginData = () => {
    const { login, password } = this.state;
    this.props.dispatch(loginSend({ login, password }));
  };

  render() {
    return (
      <div className="container">
        <div className="row loginWrapper">
          <div className="col-md-4 col-xs-10">
            <div className="well clearfix">
              <h1>Login</h1>
              <p className="text-muted">Sign In to your account</p>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.login}
                  onChange={this.handleLogin}
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePassword}
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-primary pull-right"
                  onClick={this.submitLoginData}
                  disabled={this.checkField()}
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

function mapStateToProps(state) {
  return {
    data: state.user.data,
    error: state.user.error,
  };
}

export default connect(mapStateToProps)(Login);
