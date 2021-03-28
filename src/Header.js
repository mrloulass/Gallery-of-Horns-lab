import React from 'react';
import './Header.css'
import SelectedBeast from './SelectedBeast.js';

class Header extends React.Component {
  render() {
    return (
      <header nameclass="header_title">
        <h1>What is your Favorite Horned Beast?</h1>
        <h2>Please Click an Image</h2>
        <SelectedBeast />
      </header>
    )
  }

}

export default Header;
