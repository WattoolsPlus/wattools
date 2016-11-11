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
          <span className='' href={ this.props.link }>{ this.props.title }</span>
          <span className='' href={ this.props.authorlink }> by { this.props.author }</span>
        </div>
        <div className=''>{ this.props.quickDescription }</div>
        <a className='' href={ this.props.sourcelink }>source</a>
        <Panel collapsible expanded={ this.state.open }>
          { this.props.description }
        </Panel>
      </Panel>
    );
  }
}
