import React, { PropTypes } from 'react';
import './header.scss';

const Header = (props) => (
    <header className="Header">
      {/*<button className="Header-button">*/}
        {/*<i className="fa fa-chevron-left" />*/}
        {/*Menu*/}
      {/*</button>*/}

      <h1 className="Header-pageTitle">
        {props.title}
      </h1>

    </header>
  );

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
