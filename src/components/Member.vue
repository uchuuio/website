<template>
  <div class="member">
    <img class="mw-100 br-100" v-bind:src="image" v-bind:alt="name">
    <h4>{{name}}</h4>
    <h5>{{position}}</h5>
    <p>{{description}}</p>
    <a class="twitter-link" v-if="twitter" v-bind:href="'https://twitter.com/' + twitter" v-bind:title="'Follow ' + name + ' on Twitter'"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
    <a class="github-link" v-if="github" v-bind:href="'https://github.com/' + github" v-bind:title="'Follow ' + name + ' on Github'"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
    <a class="facebook-link" v-if="facebook" v-bind:href="'https://facebook.com/' + facebook" v-bind:title="'Like ' + name + ' on Facebook'"><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
    <a class="soundcloud-link" v-if="soundcloud" v-bind:href="'https://soundcloud.com/' + soundcloud" v-bind:title="'Follow ' + name + ' on Soundcloud'"><i class="fa fa-soundcloud fa-2x" aria-hidden="true"></i></a>
    <a class="url-link" v-if="link" v-bind:href="link" v-bind:title="name + '\'s website'"><i class="fa fa-globe fa-2x" aria-hidden="true"></i></a>
  </div>
</template>

<script>
export default {
  name: 'member',
  props: [
    'image',
    'name',
    'position',
    'description',
    'twitter',
    'github',
    'facebook',
    'soundcloud',
    'link',
  ],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fa-twitter {
    color: #1da1f2;
  }
  .fa-github {
    color: #333;
  }
  .fa-facebook-square {
    color: #3b5998;
  }
  .fa-soundcloud {
    color: #ff8800;
  }
</style>
