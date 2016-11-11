import React, { PropTypes } from 'react';
import { InputGroup, Button, FormControl, DropdownButton, MenuItem } from 'react-bootstrap';

import './css/Searchbar.css';

export default class User extends React.Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    onCategoryChange: PropTypes.func.isRequired,
    onSearchChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const categories = [
      'All',
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
      <InputGroup className={'searchbar'}>
        <InputGroup.Button>
          <DropdownButton title={`Search ${this.props.category || 'All'}`}>
            {
              categories.map((category, index) => (
                <MenuItem key={index} onClick={() => this.props.onCategoryChange(category)}>
                  {category}
                </MenuItem>
              ))
            }
          </DropdownButton>
        </InputGroup.Button>
        <FormControl
          type={'text'}
          onChange={this.props.onSearchChange}
          value={this.props.search}
        />
        <InputGroup.Button>
          <Button bsStyle={'success'}>
            <span className={'glyphicon glyphicon-plus'} aria-hidden="true" /> Submit a Tool
          </Button>
        </InputGroup.Button>
      </InputGroup>
    );
  }
}
