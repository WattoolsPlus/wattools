import React, { PropTypes } from 'react';
import fuzzy from 'fuzzy';
import 'whatwg-fetch';

import Tool from './Tool';

export default class Tools extends React.Component {
  static propTypes = {
    searchQuery: PropTypes.string,
    selectedCategory: PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.state = { tools: [] };
    this.fetchTools();
  }

  fetchTools() {
    fetch('http://wattools-stage.herokuapp.com/api/tools/')
        .then(response => response.json())
        .then(json => this.setState({ tools: json.data }));
  }

  render() {
    return (
      <div>
        {
          fuzzy.filter(this.props.searchQuery, this.state.tools, {
            extract: item => item.title,
          }).map(tool => tool.original)
            .filter(tool => this.props.selectedCategory === null
                || this.props.selectedCategory === 'All'
                || this.props.selectedCategory === tool.category)
            .map((tool) => (<Tool key={tool.title} {...tool} />))
        }
      </div>
    );
  }
}
