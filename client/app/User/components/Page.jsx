import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

// import Sidebar from './Sidebar';
import Searchbar from './Searchbar';
import Tools from './Tools';

import './css/Page.css';

export default class Page extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedCategory: 'All',
      searchQuery: '',
    };
  }

  render() {
    return (
      <Grid className={'container page-top-padding'}>
        <Row className={'page-center-block'}>
          <Col md={9}>
            <h1 className={'text-center'}>WatTools</h1>
          </Col>
        </Row>
        <Row className={'page-center-block'}>
          <Col md={9}>
            <Searchbar
              category={this.state.selectedCategory}
              search={this.state.searchQuery}
              onCategoryChange={category => this.setState({ selectedCategory: category })}
              onSearchChange={event => this.setState({ searchQuery: event.target.value })}
            />
          </Col>
        </Row>
        <Row className={'page-center-block'}>
          <Col md={9}>
            <Tools
              selectedCategory={this.state.selectedCategory}
              searchQuery={this.state.searchQuery}
            />
          </Col>
        </Row>
        <Row className={'page-center-block'}>
          <Col md={9}>
            <a href={'https://github.com/WattoolsPlus/wattools'}>
              <h4 className={'text-center'}>
                {'Contribute '}
                <span className={'glyphicon glyphicon-heart-empty'} aria-hidden="true" />
                {' on GitHub'}
              </h4>
            </a>
          </Col>
        </Row>
      </Grid>
    );
  }
}
