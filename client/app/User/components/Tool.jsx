import React, { PropTypes } from 'react';
import { Button, Collapse, Well, Panel } from 'react-bootstrap';

import './css/Tools.css';

export default class Tool extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
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
    const footer = (
      <div className={'text-center'}>
        <span
          className={
            `glyphicon ${this.state.open ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`
          }
          aria-hidden="true"
        />
      </div>
    );

    return (
      <Panel
        onClick={() => this.setState({ open: !this.state.open })}
        footer={footer}
      >
        <div className={'container-fluid'}>
          <div className={'pull-left'}>
            <h3 className={'tool-title'}>{this.props.title}</h3>
            { this.props.author ? <span>by {this.props.author}</span> : ''}
          </div>
          <div className={'pull-right btn-group tool-btn-group'}>
            <Button href={this.props.link}>
              <span className={'glyphicon glyphicon-link'} aria-hidden="true" /> Link
            </Button>
            <Button href={this.props.source_link}>
              <span className={'glyphicon glyphicon-file'} aria-hidden="true" /> Source
            </Button>
            <Button href={this.props.author_link}>
              <span className={'glyphicon glyphicon-user'} aria-hidden="true" /> Author
            </Button>
          </div>
        </div>
        <div className={'container-fluid'}>
          <div>{this.props.quickDescription}</div>
          <Collapse in={this.state.open}>
            <div>
              <Well className={'tool-well'}>
                {this.props.description}
              </Well>
            </div>
          </Collapse>
        </div>
      </Panel>
    );
  }
}
