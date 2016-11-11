import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';

import './css/Sidebar.css';

export default class Sidebar extends React.Component {
  render() {
    const categories = ['General', 'Course Selection', 'JobMine', 'Learn', 'GRT', 'Class Helpers', 'Guides', 'Developers', 'Dead'];
    return (
      <div className='sidebar'>
        WatTools
        <Nav bsStyle='pills' stacked>
          {categories.map((category, index) => {
            return (
              <NavItem key={index}>
                {category}
              </NavItem>
            );
          })}
        </Nav>
      </div>
    );
  }
}
