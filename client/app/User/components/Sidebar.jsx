import React, { PropTypes } from 'react';
import { Panel, Nav, NavItem } from 'react-bootstrap';

import './css/Sidebar.css';

export default class Sidebar extends React.Component {
  static propTypes = {
    onClickCategory: PropTypes.func.isRequired,
    selectedCategory: PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const categories = [
      'General',
      'Course Selection',
      'JobMine',
      'Learn',
      'GRT',
      'Class Helpers',
      'Guides',
      'Developers',
      'Dead',
    ];

    const title = (
      <h1 className={'text-center'}>WatTools</h1>
    );

    return (
      <Panel header={title} >

        {/* A collection of tools for University of Waterloo students,
            by University of Waterloo students.*/}

        <Nav
          bsStyle={'pills'}
          stacked
          activeKey={this.props.selectedCategory}
          onSelect={this.props.onClickCategory}
        >
          {categories.map((category, index) => (
            <NavItem key={index} eventKey={category}>
              {category}
            </NavItem>
          ))}
        </Nav>

        <div className={'divider'} />

        <Nav
          bsStyle={'pills'}
          stacked
        >
          <NavItem href={'/submit'}>
            Submit a new tool
          </NavItem>
        </Nav>
      </Panel>
    );
  }
}
