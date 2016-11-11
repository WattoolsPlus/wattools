import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';

const styles = {
  container: {
    //width: '290px',
    background: '#eee8d5',
  },
};

export default class Sidebar extends React.Component {
  render() {
    const categories = ['General', 'Course Selection', 'JobMine', 'Learn', 'GRT', 'Class Helpers', 'Guides', 'Developers', 'Dead'];
    return (
      <div style={styles.container}>
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
