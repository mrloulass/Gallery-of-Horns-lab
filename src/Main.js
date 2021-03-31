import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';

import './Main.css';

class Main extends React.Component {
  
  render() {
    let hornedBeastArray = this.props.animals.map((animal, indexKeys) => {
      return <HornedBeast
        title = {animal.title}
        image_url = {animal.image_url}
        name = {animal.keyword}
        description = {animal.description}
        horns = {animal.horns}
        key = {indexKeys}
        handleClick = {this.props.handleClick}
      />
    })

    return (
      <main>
        <CardColumns>
          {hornedBeastArray}
        </CardColumns>
      </main>
    );
  }
}

export default Main;

