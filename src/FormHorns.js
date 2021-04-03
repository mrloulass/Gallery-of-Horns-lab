import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
// When you select the number of horns in the form the page render with the images of that horn beasts
class FormHorns extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectHorns: 'horns'
    };
  }

  handleHornsSelected = event => {
    const horns = parseInt(event.target.value);
    if (horns) {
      let filteredHornBeasts = this.props.animals.filter(animal => animal.horns === horns);
      this.props.findFilteredHornBeasts(filteredHornBeasts);
    } else {
      this.props.findFilteredHornBeasts(this.props.animals)
    }
    // short hand for if else statement
    // let filteredHornBeasts = this.props.animals.filter(animal => animal.horns === horns);
    // let hornedBeastRender = horns ? filteredHornBeasts : this.props.animals;
    // this.props.findFilteredHornBeasts(hornedBeastRender);
  }

  render() {
// console.log('in FormHorn.js', this.props)
    return (
      <Container>
        <Form>
          <Form.Group controlId="Choose_Horns">
            <Form.Label>Choose Number of Horns</Form.Label>
            <Form.Control as="select" onChange={this.handleHornsSelected} custom size='lg' >
              <option value="All">All Horn Beasts</option>
              <option value="1">1 horn</option>
              <option value="2">2 horns</option>
              <option value="3">3 horns</option>
              <option value="100">100 horns</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default FormHorns;
