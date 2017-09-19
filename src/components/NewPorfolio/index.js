import React, { Component } from 'react';

import { SketchPicker } from 'react-color';

import './newPortfolio.scss';

class NewPortfolio extends Component {


  render() {
    return (
      <div>
        <label>
          select background color
          <SketchPicker />
        </label>
        
      </div>
    );
  }
}

export default NewPortfolio;
