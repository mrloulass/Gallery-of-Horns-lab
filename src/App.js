import './App.css';
import React from 'react'

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';

class App extends React.Component {
  
  render() {
    return (
      <div >
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}


export default App;
