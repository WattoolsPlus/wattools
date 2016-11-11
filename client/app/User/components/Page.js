import React from 'react';
import Sidebar from './Sidebar';
import Tools from './Tools';
import {Grid, Row, Col} from 'react-bootstrap';

import './css/Page.css';

export default class Page extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <Tools />
          </Col>
        </Row>
      </Grid>
    )
  }
}
