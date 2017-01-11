<template>
  <div class="hero">
    <div class="herobg"></div>
    <div class="herocontent">
      <h1 class="b f1 f-headline-ns lh-title tc db ma0">{{name}}</h1>
      <h2 class="jp-title b f2 lh-title tc db mb4">{{subtitle}}</h2>
      <div class="navigation tc">
        <a class="projects-link link f6 f5-ns dib mr30 mr3-ns" href="#projects" title="Projects">Projects</a>
        <a class="about-link link f6 f5-ns dib mr30 mr3-ns" href="#about" title="About Us">Who We Are</a>
        <a class="github-link link f6 f5-ns dib mr0 mr3-ns" href="https://github.com/uchuuio" title="Github">Github</a>
        <!--<a class="link f6 f5-ns dib" href="#" title="Contact">Contact</a>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero',
  data() {
    return {
      name: 'uchuu',
      subtitle: '宇宙',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hero {
    background-attachment: fixed;
    background-image: url('../assets/herobg.jpg');
    background-position: center;
    background-size: cover;
    color: #fff;
    height: 100vh;
    width: 100vw;
  }
  .herobg {
    background: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .herocontent {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
    z-index: 2;
  }

  .jp-title {
    margin-top: -30px;
  }
  @media screen and (max-width: 768px) {
    .jp-title {
      margin-top: -20px;
    }
  }

  .link {
    color: #fff;
  }
  .link:link:hover,
  .link:visited:hover {
    color: #FF4C3B;
  }
</style>
