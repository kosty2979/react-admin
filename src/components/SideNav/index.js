import React, { PropTypes } from 'react';
import cx from 'classnames';
import Menu from '../Menu';

import './sidenav.scss';

const SideNav = (props) => {
  SideNav.propTypes = {
    customClass: PropTypes.string
  };

  const menuItems = [
    {
      title: 'new Post',
      link: '/dasboard/newPost',
      faClass: 'fa-dashboard'
    },
    {
      title: 'All Posts',
      link: '/dasboard/allpost',
      faClass: 'fa-users', // Font awesome class
      count: 15 // Notification count
    }
  ];

  const menuItems2 = [
    {
      title: 'new Portfolio',
      link: '/dasboard/newPorfolio',
      faClass: 'fa-phone'
    },
    {
      title: 'all Portfolio',
      link: '/dasboard/allporfolio',
      faClass: 'fa-money'
    }
  ];

  return (
    <nav className={cx('SideNav', props.customClass)}>
			<span className="SideNav-companyLogo">
        OpenGeeksLab
      </span>

      <Menu 
        items={menuItems}
        caption="Blog"
      />

      <Menu 
        items={menuItems2}
        caption="Portfolio"
      />

    </nav>
  );
};

export default SideNav;