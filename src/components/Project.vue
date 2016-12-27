<template>
  <div class="project pa4" v-bind:style="{ background: bg, color: color, textAlign: textalign }">
    <h3 class="f2 mt0 di">{{name}}</h3>
    <span class="f3" v-if="github">&nbsp;<a class="github-link" v-bind:style="{ color: color }" v-bind:href="github" v-bind:title="'Check out ' + name + ' on Github'"><i class="fa fa-github" aria-hidden="true"></i></a></span></h3>
    <p class="lead">{{tag}}</p>
    <a class="project-link mb0" v-if="link" v-bind:href="link" v-bind:title="'View ' + name" v-bind:style="{ color: color }">View Project</a>
  </div>
</template>

<script>
export default {
  name: 'project',
  props: [
    'bg',
    'color',
    'textalign',
    'name',
    'tag',
    'link',
    'github',
  ],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
