import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Component } from 'react';

export default class Admin extends React.Component {
	constructor(props) {
    super(props);

    this.state = { tools: [] };
    this.fetchTools();
  }

  fetchTools() {
    fetch(`https://api.myjson.com/bins/23poo`).then(response => {
      return response.json();
    }).then(json => {
      this.setState({ tools: json });
    });
  }

  render(){

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
          {
            this.state.tools.map(function(tool, i) {
              return <tr key={tool.id}>
                <td>{tool.title}</td>
                <td>{tool.category}</td>
                <td>{tool.description}</td>
                <td>{tool.link}</td>
                <td>{tool.author}</td>
                <td>{tool.author_link}</td>
                <td>{tool.source_link}</td>
                <td> <Button>Approve</Button></td>
                <td> <Button>Reject</Button></td>
              </tr>;
            })
          }
        </tbody>
      </Table>
    )
  }
};
