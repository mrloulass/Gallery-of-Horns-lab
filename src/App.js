import './App.css';
import React from 'react'

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast.js';
import FormHorns from './FormHorns.js';

import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      animalImage: {},
      hornedBeastRender: data,
    }
  }

  showImageInModal = clickedImage => {
    this.setState({
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

  findFilteredHornBeasts = filteredHornBeasts => {
    this.setState({hornedBeastRender: filteredHornBeasts});
  }

  render() {
    return (
      <div >
        <Header />
        <FormHorns
          animals={data}
          findFilteredHornBeasts={this.findFilteredHornBeasts}
        />

        <SelectedBeast
          show={this.state.show}
          hideImage={this.hideImageInModal}
          animalImage={this.state.animalImage}
        />

        <Main
          animals={this.state.hornedBeastRender}
          handleClick={this.showImageInModal}
        />

        <Footer />
      </div>
    )
  }
}


export default App;
