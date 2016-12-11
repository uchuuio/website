<template>
  <div class="hero">
    <div class="herobg"></div>
    <div class="herocontent">
      <h1 class="b f1 f-headline-ns lh-title tc db mb3 mb4-ns mt0">{{name}}</h1>
      <div class="tc">
        <a class="link f6 f5-ns dib mr3" href="#projects" title="Projects">Projects</a>
        <a class="link f6 f5-ns dib mr3" href="#about" title="About">About</a>
        <a class="link f6 f5-ns dib" href="#" title="Contact">Contact</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero',
  data() {
    return {
      name: 'paguco',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hero {
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

  .link {
    color: #fff;
  }
  .link:link:hover,
  .link:visited:hover {
    color: #FF4C3B;
  }
</style>
