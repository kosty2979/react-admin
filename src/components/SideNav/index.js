import React, { PropTypes } from 'react';
import cx from 'classnames';
import Menu from '../Menu';
import ActionBar from '../ActionBar';
import LogoutButton from '../LogoutButton';

import './sidenav.scss';

const SideNav = (props) => {
  SideNav.propTypes = {
    customClass: PropTypes.string
  };

  const postItems = [
    {
      title: 'new Post',
      link: '/dashboard/newpost',
      faClass: 'fa-dashboard'
    },
    {
      title: 'All Posts',
      link: '/dashboard/allpost',
      faClass: 'fa-money',
      count: 15 // Notification count
    }
  ];

  const portfolioItems = [
    {
      title: 'new Portfolio',
      link: '/dashboard/newportfolio',
      faClass: 'fa-money'
    },
    {
      title: 'all Portfolio',
      link: '/dashboard/allportfolio',
      faClass: 'fa-money'
    }
  ];

  return (
    <nav className={cx('SideNav', props.customClass)}>
			<span className="SideNav-companyLogo">
        OpenGeeksLab
      </span>

      <Menu 
        items={postItems}
        caption="Blog"
      />

      <Menu 
        items={portfolioItems}
        caption="Portfolio"
      />
      <ActionBar>
        <LogoutButton />
      </ActionBar>
    </nav>
  );
};

export default SideNav;
