import './App.css';
import React from 'react'

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast.js';
import data from './data.json';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      animalImage: {}
    }
  }
  
  showImageInModal = clickedImage => {
    this.setState ({
      show: true,
      animalImage: clickedImage,
    })
  }
  hideImageInModal = () => {
    this.setState({
      show: false,
      animalImage: {},
    })
  }
  render() {
    return (
      <div >
        <Header />

        <SelectedBeast
        show={this.state.show}
        hideImage={this.hideImageInModal}
        animalImage={this.state.animalImage}
        />

        <Main
        animals={data}
        handleClick={this.showImageInModal}
        />

        <Footer />
      </div>
    )
  }
}


export default App;
