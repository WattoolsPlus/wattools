import React, {PropTypes} from 'react';
import 'whatwg-fetch';

import Tool from './Tool';

export default class Tools extends React.Component {
  static propTypes = {
    selectedCategory: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = { tools: [] };
    this.fetchTools();
  }

  fetchTools() {
    fetch('https://api.myjson.com/bins/2ipt4')
        .then(response => response.json())
        .then(json => this.setState({ tools: json }));
  }

  render() {
    return (
      <div>
        {this.state.tools
            .filter(tool => this.props.selectedCategory === null
                || this.props.selectedCategory === tool.category)
            .map((tool) => (<Tool key={tool.title} {...tool} />))}
      </div>
    );
  }
}
