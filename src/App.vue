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
        bg="#fff"
        color="#111"
        textalign="left"
        name="Hubble"
        tag="A dashboard system"
        github="https://github.com/paguco/hubble"
      />
      <project
        bg="#333"
        color="#fff"
        textalign="center"
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
