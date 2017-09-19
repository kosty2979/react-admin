import React, { Component } from 'react';

import './AllPost.scss';

export default class AdminBlogList extends Component {

  render() {
    return (
      <div className="row">
        <ul className="list-group blogList">
          <li className="list-group-item clearfix">
              <div className="time border-right bold text-center">created date</div>
              <div className="time border-right bold text-center">edit date</div>
              <div className="col bold">Title Post</div>
          </li>
          <li className="list-group-item clearfix">
              <div className="time border-right">12 05 2015</div>
              <div className="time border-right">12 05 2017</div>
              <div className="col">Tsome post title</div>
              <div className="time pull-right">
                <i className="fa fa-pencil green" />
                <i className="fa fa-times-circle-o red" />
              </div>
          </li>
          <li className="list-group-item clearfix">
            <div className="time border-right">12 05 2015</div>
            <div className="time border-right">12 05 2017</div>
            <div className="col">Tsome post title</div>
            <div className="time pull-right">
              <i className="fa fa-pencil green" />
              <i className="fa fa-times-circle-o red" />
            </div>
          </li>
          <li className="list-group-item clearfix">
            <div className="time border-right">12 05 2015</div>
            <div className="time border-right">12 05 2017</div>
            <div className="col">Tsome post title</div>
            <div className="time pull-right">
              <i className="fa fa-pencil green" />
              <i className="fa fa-times-circle-o red" />
            </div>
          </li>
        </ul>
      </div>

    );
  }
}
