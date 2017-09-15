import React, { Component, PropTypes } from 'react';
import Header from '../../components/Header/';
import SideNav from '../../components/SideNav/';

class Dashboard extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  render() {
    const pageTitle = this.props.children.props.route.title || '';
    return (
      <div className="row">
        <SideNav />

        <div className="col-md-10 pull-right">
          <Header title={pageTitle} />

          <main className="Content">
            {this.props.children}
          </main>
        </div>

      </div>
    );
  }
}

export default Dashboard;
