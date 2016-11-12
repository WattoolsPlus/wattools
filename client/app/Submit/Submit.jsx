import React from 'react';
import { Grid, Button, ControlLabel, FormControl, FormGroup, HelpBlock, Checkbox, Radio } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid style={{marginTop:"50px"}}>
      <form>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Category</ControlLabel>
          <FormControl componentClass="select">
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
        <FieldGroup
          id="formControlsTitle"
          type="text"
          label="Title"
          placeholder="Enter title"
        />
        <FieldGroup
          id="formControlsDescription"
          type="text"
          label="Description"
          placeholder="Enter description"
        />
        <FieldGroup
          id="formControlsAuthor"
          type="text"
          label="Name of Author"
          placeholder="Enter author's name"
        />
        <FieldGroup
          id="formControlsAuthorLink"
          type="url"
          label="Link to Author's Website"
          placeholder="Enter author's website link"
        />
        <FieldGroup
          id="formControlsLink"
          type="url"
          label="Link to Project"
          placeholder="Enter link to project"
        />
        <FieldGroup
          id="formControlsSourceLink"
          type="url"
          label="Link to Project's Source Code"
          placeholder="Enter link to project code"
        />
        <Button type="submit">
          Submit
        </Button>
      </form>
      </Grid>
    );
  }
}

