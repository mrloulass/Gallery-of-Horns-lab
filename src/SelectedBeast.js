import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
constructor(props){
  super(props);
  this.state = {
    showPicture: false,

  }
}
showPicture = () => {
this.setState({showPicture: true});
}
hidePicture = () => {
this.setState({hidePicture: false});
}

  render() {
    return (
      <div>
        <Button onClick={this.showPicture}>Open Modal</Button>
        <Modal show={this.state.showPicture} onHide={this.hidePicture}>
        <Modal.Dialog >
          <Modal.Header closeButton>
            <Modal.Title>Your Favorite Picture</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
        </Modal.Dialog >
        </Modal>
      </div>
    );
  }
}



export default SelectedBeast;
