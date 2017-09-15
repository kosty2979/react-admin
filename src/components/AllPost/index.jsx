import React, { Component } from 'react';

import './AllPost.scss';

export default class AdminBlogList extends Component {

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item list-group-item-bold">
          <span className="time text-center">create data</span>
          <span className="time text-center">edit data</span>
          <span className="title"> text in  blog title </span>
        </li>
        <li className="list-group-item clearffix">
          <span className="time text-center"> 25 04 2017</span>
          <span className="time text-center"> 25 04 2017</span>
          <span className="title"> title</span>
            <button className="icon btn btn-danger pull-right">remove</button>
            <button className="icon btn btn-success pull-right">edit</button>
        </li>
      </ul>
    );
  }
}
