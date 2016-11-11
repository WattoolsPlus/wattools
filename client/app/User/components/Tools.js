import React from 'react';
import Collapse from 'react-collapse';
import 'whatwg-fetch';

import Tool from './Tool';

export default class Tools extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tools: [] };
    this.fetchTools();
  }

  fetchTools() {
    fetch(`https://api.myjson.com/bins/2ipt4`).then(response => {
      return response.json();
    }).then(json => {
      this.setState({ tools: json });
    });
  }

  render() {
    return (
      <div>
        { this.state.tools.filter(tool =>
          this.props.selectedCategory === null || this.props.selectedCategory === tool.category )
          .map((tool, index) => ( <Tool key={tool.title} { ...tool } /> )) }
      </div>
    );
  }
}
