import React, { Component } from 'react';

import Project from './Project';

class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <Project
          bg="radial-gradient(at 45px 20px, rgb(252, 0, 255) 0%, rgb(0, 219, 222) 100%)"
          color="#fff"
          textalign="right"
          name="START"
          tag="A startpage for life"
          link="https://start.uchuu.io"
          github="https://github.com/uchuuio/start"
        />

        <Project
          bg="#fff"
          color="#111"
          textalign="left"
          name="Translate Server"
          tag="A micro-based google translate proxy"
          link="https://translate.uchuu.io"
          github="https://github.com/uchuuio/translate-server"
        />

        <Project
          bg="#FF4C3B"
          color="#fff"
          textalign="center"
          name="Disbott"
          tag="A chatbot for Discord"
          link="https://disbott.uchuu.io"
          github="https://github.com/uchuuio/disbott"
        />

        <Project
          bg="#0072bb"
          color="#fff"
          textalign="right"
          name="EquationsApp"
          tag="An app for scientific equations"
          github="https://github.com/uchuuio/EquationsApp"
        />

        <Project
          bg="#1d6f96"
          color="#fff"
          textalign="left"
          name="Z E N"
          tag="A thought of the day website"
          link="https://zen.uchuu.io"
          github="https://github.com/uchuuio/zen"
        />
      </div>
    );
  }
}

export default Projects;
