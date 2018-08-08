import React, { Component } from 'react';

import { SketchPicker } from 'react-color';

import './newPortfolio.scss';

class NewPortfolio extends Component {


  render() {
    return (
      <div>
        <div>
          select background color
          <SketchPicker />
        </div>
        
      </div>
    );
  }
}

export default NewPortfolio;
