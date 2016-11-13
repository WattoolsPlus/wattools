import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Button, ControlLabel, FormControl, FormGroup, HelpBlock, Checkbox, Radio } from 'react-bootstrap';

export default class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit(e) {
    // stop page refresh
    e.preventDefault();

    var category = ReactDOM.findDOMNode(this.refs.category).value;
    var title = ReactDOM.findDOMNode(this.refs.title).value;
    var description = ReactDOM.findDOMNode(this.refs.description).value;
    var author = ReactDOM.findDOMNode(this.refs.author).value;
    var authorLink = ReactDOM.findDOMNode(this.refs.author_link).value;
    var link = ReactDOM.findDOMNode(this.refs.link).value;
    var sourceLink = ReactDOM.findDOMNode(this.refs.source_link).value;

    fetch('http://wattools-stage.herokuapp.com/api/tool/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category: category,
        title: title,
        description: description,
        author: author,
        author_link: authorLink,
        link: link,
        source_link: sourceLink
      })
    }).then(() => alert('Tool uploaded for review!'));
  }

  render() {
    return (
      <Grid style={{marginTop:"50px"}}>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Category</ControlLabel>
          <FormControl componentClass="select" ref="category">
            <option value="General">General</option>
            <option value="Course Selection">Course Selection</option>
            <option value="Jobmine">Jobmine</option>
            <option value="D2L/Learn">D2L/Learn</option>
            <option value="GRT/Transit">GRT/Transit</option>
            <option value="Class Helpers">Class Helpers</option>
            <option value="Guides">Guides</option>
            <option value="Developer-focused">Developer-focused</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsTitle">
          <ControlLabel>Title</ControlLabel>
          <FormControl
            id="formControlsTitle"
            type="text"
            label="Title"
            placeholder="Enter title"
            ref="title"
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Description</ControlLabel>
          <FormControl
            id="formControlsDescription"
            type="text"
            placeholder="Enter description"
            ref="description"
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Name of Author</ControlLabel>
          <FormControl
            id="formControlsAuthor"
            type="text"
            placeholder="Enter author's name"
            ref="author"
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Link to Author's Website</ControlLabel>
          <FormControl
            id="formControlsAuthorLink"
            type="url"
            placeholder="Enter author's website link"
            ref="author_link"
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Link to Project</ControlLabel>
          <FormControl
            id="formControlsLink"
            type="url"
            placeholder="Enter link to project"
            ref="link"
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Link to Project's Source Code</ControlLabel>
          <FormControl
            id="formControlsSourceLink"
            type="url"
            placeholder="Enter link to project code"
            ref="source_link"
          />
        </FormGroup>
        <Button type="submit">
          Submit Tool
        </Button>
      </form>
      </Grid>
    );
  }
}

