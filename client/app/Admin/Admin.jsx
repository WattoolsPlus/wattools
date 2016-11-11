import React from 'react';
import { Table, Button } from 'react-bootstrap';

export default class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tools: [] };
    this.fetchTools();
  }

  fetchTools() {
    fetch('https://api.myjson.com/bins/23poo')
      .then(response => response.json())
      .then(json => {
        this.setState({ tools: json });
      });
  }

  handleApprove() {
    this.fetchTools();
  }

  handleReject() {
    this.fetchTools();
  }

  render() {
    return (
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
          </tr>
        </thead>
        <tbody>
          { () => this.state.tools.map((tool) => (
            <tr key={tool.id}>
              <td>{tool.title}</td>
              <td>{tool.category}</td>
              <td>{tool.description}</td>
              <td>{tool.link}</td>
              <td>{tool.author}</td>
              <td>{tool.author_link}</td>
              <td>{tool.source_link}</td>
              <td> <Button onClick={() => this.handleApprove(tool.id)}>Approve</Button></td>
              <td> <Button onClick={() => this.handleReject(tool.id)}>Reject</Button></td>
            </tr>
          )) }
        </tbody>
      </Table>
    );
  }
}
