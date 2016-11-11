import React, { PropTypes } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

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

    return (
      <div className={'sidebar'}>
        <div className={'title'}>
          WatTools
        </div>

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
      </div>
    );
  }
}
