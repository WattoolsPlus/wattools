import React from 'react';
import Collapse from 'react-collapse';

import Tool from './Tool';

export default class Tools extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tools: this.fetchTools()
    };
  }

  fetchTools() {
    return [
      {
        title: 'UWaterloo Subreddit',
        description: 'A subreddit for the UWaterloo community.',
      },
      {
        title: 'Waterloo GPS',
        description: 'Android app which finds the shortest path between two floors in two buildings on campus that does not go outside. aaaaa aaaaaaa aaaaaaaaa ',
      },
    ];
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
