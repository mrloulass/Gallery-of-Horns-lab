import React from 'react';
import arrow_heart from './arrow_heart.png';
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfLikesWithHearts: 0
    }
  }

  imageClicked = () => {
    this.setState({
      numberOfLikesWithHearts: this.state.numberOfLikesWithHearts + 1
    });
  }

  render() {
    return (
        <Card style={{ width: '18rem'}}>
          <Card.Img variant="top" onClick={this.imageClicked} src={this.props.image_url} style={{ width: '100%'}} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>Number of Horns: {this.props.horns}</Card.Text>
          </Card.Body>
          <Card.Footer>
          <img src={arrow_heart} alt="Arrow with Heart" style={{ width: '50%'}} />
          {this.state.numberOfLikesWithHearts}
          </Card.Footer>
        </Card>
    );
  }
}

export default HornedBeast;
