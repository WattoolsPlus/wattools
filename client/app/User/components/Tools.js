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
    fetch(`https://api.myjson.com/bins/19hq0`).then(response => {
      return response.json();
    }).then(json => {
      this.setState({ tools: json });
    });
  }

  render() {
    return (
      <div>
        { this.state.tools.map((tool, index) =>
          ( <Tool key={tool.title} title={tool.title} description ={tool.description}/> )) }
      </div>
    );
  }
}
