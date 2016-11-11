import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Sidebar from './Sidebar';
import Tools from './Tools';

import './css/Page.css';

export default class Page extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedCategory: null,
    };
  }

  handleClickCategory(category) {
    let selectedCategory;
    if (category === this.state.selectedCategory) {
      selectedCategory = null;
    } else {
      selectedCategory = category;
    }
    this.setState({
      selectedCategory,
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={3}>
            <Sidebar
              onClickCategory={this.handleClickCategory}
              selectedCategory={this.state.selectedCategory}
            />
          </Col>
          <Col md={9}>
            <Tools selectedCategory={this.state.selectedCategory} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
