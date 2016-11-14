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

    let author;
    if (this.props.author) {
      author = (
        <span>by {this.props.author}</span>
      );
    }

    let sourceLink;
    if (this.props.source_link) {
      sourceLink = (
        <Button href={this.props.source_link}>
          <span className={'glyphicon glyphicon-file'} aria-hidden="true" /> Source
        </Button>
      );
    }

    let authorLink;
    if (this.props.author_link) {
      authorLink = (
        <Button href={this.props.author_link}>
          <span className={'glyphicon glyphicon-user'} aria-hidden="true" /> Author
        </Button>
      );
    }

    return (
      <Panel
        onClick={() => this.setState({ open: !this.state.open })}
        footer={footer}
      >
        <div className={'container-fluid'}>
          <div className={'pull-left'}>
            <h3 className={'tool-title'}>{this.props.title}</h3>
            { author }
          </div>
          <div className={'pull-right btn-group tool-btn-group'}>
            <Button href={this.props.link}>
              <span className={'glyphicon glyphicon-link'} aria-hidden="true" /> Link
            </Button>
            { sourceLink }
            { authorLink }
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
