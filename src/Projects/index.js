import React, { Component } from 'react';

import Project from './Project';

class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <Project
          bg="#FF4C3B"
          color="#fff"
          textalign="right"
          name="Disbott"
          tag="A chatbot for Discord"
          link="https://disbott.uchuu.io"
          github="https://github.com/uchuuio/disbott"
        />

        <Project
          bg="#0072bb"
          color="#fff"
          textalign="left"
          name="EquationsApp"
          tag="App for scientific equations"
          github="https://github.com/uchuuio/EquationsApp"
        />

        <Project
          bg="#fff"
          color="#111111"
          textalign="center"
          name="Hubble"
          tag="A dashboard system"
          github="https://github.com/uchuuio/hubble"
        />

        <Project
          bg="#333333"
          color="#fff"
          textalign="right"
          name="StyleGuide"
          tag="A styleguide to liveby"
          github="https://github.com/uchuuio/styleguide"
        />
      </div>
    );
  }
}

export default Projects;
