<template>
  <div id="app">
    <hero />
    <div id="projects">
      <project
        bg="#FF4C3B"
        color="#fff"
        textalign="right"
        name="Disbott"
        tag="A chatbot for Discord"
        link="https://disbott.pagu.co"
        github="https://github.com/paguco/disbott"
      />
      <project
        bg="#0072BB"
        color="#fff"
        textalign="left"
        name="EquationsApp"
        tag="App for scientific equations"
        github="https://github.com/paguco/EquationsApp"
      />
      <project
        bg="#fff"
        color="#111"
        textalign="center"
        name="Hubble"
        tag="A dashboard system"
        github="https://github.com/paguco/hubble"
      />
      <project
        bg="#333"
        color="#fff"
        textalign="right"
        name="StyleGuide"
        tag="A styleguide to liveby"
        github="https://github.com/paguco/styleguide"
      />
    </div>
    <about />
  </div>
</template>

<script>
import Hero from './components/Hero';
import Project from './components/Project';
import About from './components/About';

export default {
  name: 'app',
  components: {
    Hero,
    Project,
    About,
  },
};
</script>

<style>
</style>
