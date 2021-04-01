import React from 'react';
import Form from 'react-bootstrap/Form'
// When you select the number of horns in the form the page render with the images of that horn beasts
class FormHorns extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectHorns:'Horns'
    };
  }

  handleFormSelect = event => {
    event.preventDefault();
  }

  handleHornsSelected = event => {
    this.setState({
      selectHorns: event.target.value
    });
  }

  render() {
   

    return (
      <Form>
        <Form.Group controlId="Choose_Horns">
          <Form.Label>Choose Number of Horns</Form.Label>
          <Form.Control as="select" custom>
            <option>1 horn</option>
            <option>2 horns</option>
            <option>3 horns</option>
            <option>100 horns</option>
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
}

export default FormHorns;
