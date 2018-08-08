import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import Header from '../../components/Header/';
import SideNav from '../../components/SideNav/';

class Dashboard extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  static onEnter(store, nextState, replace) {
    const user = store.getState().user;
    // if (!user.data) {
    //   replace('/');
    // }
  }

  componentWillReceiveProps(nextProps) {
    //if (!nextProps.data) this.redirectToLogin();
  }

  redirectToLogin = () => {
    browserHistory.push('/');
  };

  render() {
    const pageTitle = this.props.children.props.route.title || '';
    return (
      <div className="row">
        <SideNav />

        <div className="col-xs-10 pull-right">
          <Header title={pageTitle} />

          <main className="Content">
            {this.props.children}
          </main>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.user.data
  };
}
export default connect(mapStateToProps)(Dashboard);

