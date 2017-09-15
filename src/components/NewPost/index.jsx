import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './NewPost.scss';

const modules = {
  toolbar: [
    [
      { header: [1, 2, 3, 4, 5, false] },
      { font: [] },
      { align: [] },
      { color: [] },
      { background: [] }
    ],
    ['bold', 'italic', 'underline', 'strike'],
    [{ script: 'sub' }, { script: 'super' }],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['code-block', 'blockquote'],
    ['link', 'image'],
    ['clean']
  ]
};

const formats = [
  'header', 'script',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image',
  'color', 'background',
  'code-block',
  'clean', 'header'
];

export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    return (
      <div >
        <ReactQuill
          className="QuillWrap"
          theme="snow"
          modules={modules}
          formats={formats}
          value={this.state.text}
          onChange={this.handleChange}
        />
      </div>

    );
  }
}
