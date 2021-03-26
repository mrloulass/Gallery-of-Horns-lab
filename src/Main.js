import React from 'react';
import HornedBeast from './HornedBeast.js';

import data from './data.json';

class main extends React.Component {
  render() {
    let hornedBeastArray = data.map( animal => {
      return <HornedBeast
        title = {animal.title}
        image_url = {animal.image_url}
        name = {animal.keyword}
        description = {animal.description}
        horns = {animal.horns}
        />
    })

    return (
      <main>
        {hornedBeastArray}
      </main>
    );
  }
}

export default main;

