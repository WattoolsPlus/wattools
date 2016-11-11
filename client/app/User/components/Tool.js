import React from 'react';
import { Well, Collapse, Panel } from 'react-bootstrap';

export default class Tool extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  render() {
    return (
      <Panel className='' onClick={ () => this.setState({ open: !this.state.open })}>
        <div className=''>
          <a className='' href={ this.props.link }>{ this.props.title }</a>
          <span> by </span>
          <a className='' href={ this.props.author_link }>{ this.props.author }</a>
        </div>
        <div className=''>{ this.props.quickDescription }</div>
        <Panel collapsible expanded={ this.state.open }>
          { this.props.description }
        </Panel>
        <a className='' href={ this.props.source_link }>source</a>
      </Panel>
    );
  }
}
