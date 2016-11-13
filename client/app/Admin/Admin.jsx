import React from 'react';
import { Grid, Table, Button } from 'react-bootstrap';

export default class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tools: [] };
    this.fetchTools();
  }

  fetchTools() {
    fetch('http://wattools-stage.herokuapp.com/api/tools?state=pending')
      .then(response => response.json())
      .then(json => {
        this.setState({ tools: json.data });
      });
  }

  handleApprove(id, state) {
    fetch('http://wattools-stage.herokuapp.com/api/judge/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        state,
        auth_token: 'abcdefg',
      }),
    }).then(() => this.fetchTools());
  }

  render() {
    return (
      <Grid style={{ marginTop: '50px' }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Link</th>
              <th>Author</th>
              <th>Author Link</th>
              <th>Source Link</th>
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.tools.map((tool) => (
                <tr key={tool.id}>
                  <td>{tool.title}</td>
                  <td>{tool.category}</td>
                  <td>{tool.description}</td>
                  <td>{tool.link}</td>
                  <td>{tool.author}</td>
                  <td>{tool.author_link}</td>
                  <td>{tool.source_link}</td>
                  <td>
                    <Button
                      bsStyle="success"
                      onClick={() => this.handleApprove(tool.id, 'approved')}
                    >
                      Approve
                    </Button>
                  </td>
                  <td>
                    <Button
                      bsStyle="danger"
                      onClick={() => this.handleApprove(tool.id, 'rejected')}
                    >
                      Reject
                  </Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Grid>
    );
  }
}
