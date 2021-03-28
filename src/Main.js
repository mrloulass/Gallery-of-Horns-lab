import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';
import data from './data.json';

import './Main.css';

class Main extends React.Component {
  
  render() {
    let hornedBeastArray = data.map((animal, indexKeys) => {
      return <HornedBeast
        title = {animal.title}
        image_url = {animal.image_url}
        name = {animal.keyword}
        description = {animal.description}
        horns = {animal.horns}
        key = {indexKeys}
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

