<template>
  <div id="about" class="about mw8 mw9-ns center pa3 ph4-ns">
    <h3 class="f2 mb1">Who We Are</h3>
    <p>uchuu is a creative multimedia studio incorporating all aspects of multimedia with web development at the forefront. Our team has worked on not only web development but music and videos too. Set up and lead by tomo in the style of Japanese Circles such as Supercell & Honeyworks where the members of the group are not all musicians or artists but come together to work on projects together. Members are encouraged to share their work with other members so we can all lean on each other for support and feedback making everything we do the best it can be!</p>
    <p>The team is currently made of:</p>
    <div class="cf ph2-ns">
      <div class="fl w-100 w-20-ns pa2">
        <member
          image="https://avatars3.githubusercontent.com/u/1489059?v=3&s=460"
          name="tomo"
          position="lead"
          description="tomo leads the group working mostly as a developer though is known to do music. tomo likes to work in Javascript and has a great keeness for frontend development. In his spare time, he is learning Japanese, drumming and playing rhythm games."
          twitter="tomopagu"
          github="tomopagu"
          link="https://tomo.pagu.co"
        />
      </div>
      <div class="fl w-100 w-20-ns pa2">
        <member
          image="https://scontent.flhr3-1.fna.fbcdn.net/v/t31.0-8/15122966_1810080195906559_6565989952278776640_o.jpg?oh=157072c9162343246cfa6ce74c661647&oe=58F3971A"
          name="jess"
          position="musician"
          description="jess is the group's primary musician and colloborates with tomo and many artists outside of the uchuu group. When not singing she likes to dream about pugs."
          twitter="jessicamoorey"
          facebook="jessicamoorevocalist"
          soundcloud="jessicamoorevocalist"
          link="http://www.jessicamoorevocalist.com/"
        />
      </div>
      <div class="fl w-100 w-20-ns pa2">
        <member
          image="static/sam.jpg"
          name="sam"
          position="developer"
          description="sam is primarily a backend developer and has been working on disbott with tomo. He is relatively new to development but has great passion for his work and loves to learn. When not developing, Sam likes to play video games."
          twitter="Mcsamwich_"
          github="80cmdude"
        />
      </div>
      <div class="fl w-100 w-20-ns pa2">
        <member
          image="https://avatars0.githubusercontent.com/u/17614920?v=3&s=460"
          name="ash"
          position="developer"
          description="ash does things sometimes"
          github="OrochiDesu"
        />
      </div>
      <div class="fl w-100 w-20-ns pa2">
        <member
          image="https://avatars0.githubusercontent.com/u/20307936?v=3&s=460"
          name="dom"
          position="developer"
          description="dom does things sometimes"
          github="Thatdwarf"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Member from './Member';

export default {
  name: 'about',
  data() {
    return {
    };
  },
  components: {
    Member,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
