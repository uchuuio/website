import React, { Component } from 'react';

import HeroComponent from './Hero';
import Projects from './Projects';
import About from './About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroComponent />
        <Projects />
        <About />
      </div>
    );
  }
}

export default App;
