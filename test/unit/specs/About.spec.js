import Vue from 'vue';
import About from 'src/components/About';
import Member from 'src/components/Member';

describe('About.vue', () => {
  let vm = null;

  before(() => {
    vm = new Vue({
      el: document.createElement('div'), // eslint-disable-line
      render: h => h(About),
    });
  });

  it('should render correct title', () => {
    expect(vm.$el.querySelector('.about h3').textContent)
      .to.equal('Who We Are');
  });
});

describe('Member.vue', () => {
  let vm = null;

  before(() => {
    vm = new Vue({
      el: document.createElement('div'), // eslint-disable-line
      render: h => h(Member, {
        props: {
          image: 'https://avatars3.githubusercontent.com/u/1489059?v=3&s=460',
          name: 'Member',
          position: 'Position',
          description: 'A description',
          twitter: 'tomouchuu',
          github: 'tomouchuu',
          facebook: 'jessicamoorevocalist',
          soundcloud: 'jessicamoorevocalist',
          link: 'https://tomo.uchuu.io',
        },
      }),
    });
  });

  describe('the image', () => {
    it('should render correct src', () => {
      expect(vm.$el.querySelector('.member img').getAttribute('src'))
        .to.equal('https://avatars3.githubusercontent.com/u/1489059?v=3&s=460');
    });

    it('should render correct alt', () => {
      expect(vm.$el.querySelector('.member img').getAttribute('alt'))
        .to.equal('Member');
    });
  });

  it('should render correct name', () => {
    expect(vm.$el.querySelector('.member h4').textContent)
      .to.equal('Member');
  });

  it('should render correct position', () => {
    expect(vm.$el.querySelector('.member h5').textContent)
      .to.equal('Position');
  });

  it('should render correct description', () => {
    expect(vm.$el.querySelector('.member p').textContent)
      .to.equal('A description');
  });

  describe('twitter link', () => {
    it('should render correct link', () => {
      expect(vm.$el.querySelector('.member .twitter-link').href)
        .to.equal('https://twitter.com/tomouchuu');
    });

    it('should render correct title', () => {
      expect(vm.$el.querySelector('.member .twitter-link').getAttribute('title'))
        .to.equal('Follow Member on Twitter');
    });
  });

  describe('github link', () => {
    it('should render correct link', () => {
      expect(vm.$el.querySelector('.member .github-link').href)
        .to.equal('https://github.com/tomouchuu');
    });

    it('should render correct title', () => {
      expect(vm.$el.querySelector('.member .github-link').getAttribute('title'))
        .to.equal('Follow Member on Github');
    });
  });

  describe('facebook link', () => {
    it('should render correct link', () => {
      expect(vm.$el.querySelector('.member .facebook-link').href)
        .to.equal('https://facebook.com/jessicamoorevocalist');
    });

    it('should render correct title', () => {
      expect(vm.$el.querySelector('.member .facebook-link').getAttribute('title'))
        .to.equal('Like Member on Facebook');
    });
  });

  describe('soundcloud link', () => {
    it('should render correct link', () => {
      expect(vm.$el.querySelector('.member .soundcloud-link').href)
        .to.equal('https://soundcloud.com/jessicamoorevocalist');
    });

    it('should render correct title', () => {
      expect(vm.$el.querySelector('.member .soundcloud-link').getAttribute('title'))
        .to.equal('Follow Member on Soundcloud');
    });
  });

  describe('url link', () => {
    it('should render correct link', () => {
      expect(vm.$el.querySelector('.member .url-link').href)
        .to.equal('https://tomo.uchuu.io/');
    });

    it('should render correct title', () => {
      expect(vm.$el.querySelector('.member .url-link').getAttribute('title'))
        .to.equal('Member\'s website');
    });
  });
});
