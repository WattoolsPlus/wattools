import React, { PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

export default class Tool extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    author_link: PropTypes.string,
    quickDescription: PropTypes.string,
    description: PropTypes.string.isRequired,
    source_link: PropTypes.string,
    link: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  render() {
    return (
      <Panel onClick={() => this.setState({ open: !this.state.open })}>
        <div>
          <a href={this.props.link}>{this.props.title}</a>
          <span> by </span>
          <a href={this.props.author_link}>{this.props.author}</a>
        </div>
        <div>{this.props.quickDescription}</div>
        <Panel collapsible expanded={this.state.open}>
          {this.props.description}
        </Panel>
        <a href={this.props.source_link}>source</a>
      </Panel>
    );
  }
}
