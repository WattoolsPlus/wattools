import React from 'react';
import { Grid, Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

export default class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'General',
      title: '',
      description: '',
      author: '',
      author_link: '',
      link: '',
      source_link: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  stateChangeHandler = (stateName, newVal) => {
    this.setState({
      [stateName]: newVal,
    });
  }

  handleSubmit(e) {
    const body = {
      category: this.state.category,
      title: this.state.title,
      description: this.state.description,
      author: this.state.author,
      author_link: this.state.author_link,
      link: this.state.link,
      source_link: this.state.source_link,
    };

    // stop page refresh
    e.preventDefault();

    fetch('http://wattools-stage.herokuapp.com/api/tool/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(() => alert('Tool uploaded for review!'));
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Grid style={{ marginTop: '50px' }}>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Category</ControlLabel>
            <FormControl
              componentClass="select"
              onChange={(event) => this.stateChangeHandler('category', event.target.value)}
            >
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
              onChange={(event) => this.stateChangeHandler('title', event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Description</ControlLabel>
            <FormControl
              id="formControlsDescription"
              type="text"
              placeholder="Enter description"
              onChange={(event) => this.stateChangeHandler('description', event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Name of Author</ControlLabel>
            <FormControl
              id="formControlsAuthor"
              type="text"
              placeholder="Enter author's name"
              onChange={(event) => this.stateChangeHandler('author', event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Link to Author's Website</ControlLabel>
            <FormControl
              id="formControlsAuthorLink"
              type="url"
              placeholder="Enter author's website link"
              onChange={(event) => this.stateChangeHandler('author_link', event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Link to Project</ControlLabel>
            <FormControl
              id="formControlsLink"
              type="url"
              placeholder="Enter link to project"
              onChange={(event) => this.stateChangeHandler('link', event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Link to Project's Source Code</ControlLabel>
            <FormControl
              id="formControlsSourceLink"
              type="url"
              placeholder="Enter link to project code"
              onChange={(event) => this.stateChangeHandler('source_link', event.target.value)}
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

