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

  render() {
    return (
      <Grid>
        <Row>
          <Col md={3}>
            <Sidebar
              selectedCategory={this.state.selectedCategory}
              onClickCategory={category => this.setState({
                selectedCategory: (category === this.state.selectedCategory) ? null : category,
              })}
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
