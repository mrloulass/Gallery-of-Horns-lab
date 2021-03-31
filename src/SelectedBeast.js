import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.hideImage}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.animalImage.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.animalImage.description}</p>
            <img src={this.props.animalImage.image_url} alt={this.props.animalImage.title} style={{ width: '100%'}} />
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hideImage}>
            Close
          </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}



export default SelectedBeast;
