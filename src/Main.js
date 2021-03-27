import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';
import data from './data.json';
import './Main.css';

class main extends React.Component {
  render() {
    let hornedBeastArray = data.map(animal => {
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
        <CardColumns>
          {hornedBeastArray}
        </CardColumns>
      </main>
    );
  }
}

export default main;

