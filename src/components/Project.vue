<template>
  <div class="project pa4" v-bind:style="{ background: bg, color: color, textAlign: textalign }">
    <h3 class="f2 mt0">{{name}}<span v-if="github">&nbsp;<a v-bind:style="{ color: color }" v-bind:href="github" v-bind:title="'Check out ' + name + ' on Github'"><i class="fa fa-github" aria-hidden="true"></i></a></span></h3>
    <p class="lead">{{tag}}</p>
    <a v-if="link" v-bind:href="link" v-bind:title="'View ' + name" v-bind:style="{ color: color }" class="mb0">View Project</a>
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
