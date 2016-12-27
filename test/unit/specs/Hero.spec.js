import Vue from 'vue';
import Hero from 'src/components/Hero';

describe('Hero.vue', () => {
  let vm = null;

  before(() => {
    vm = new Vue({
      el: document.createElement('div'), // eslint-disable-line
      render: h => h(Hero),
    });
  });

  it('should render correct title', () => {
    expect(vm.$el.querySelector('.hero .herocontent h1').textContent)
      .to.equal('uchuu');
  });

  it('should render correct subtitle', () => {
    expect(vm.$el.querySelector('.hero .herocontent h2').textContent)
      .to.equal('宇宙');
  });

  describe('Navigation', () => {
    const navigationSelector = '.hero .herocontent .navigation a.link';

    it('should have 3 links', () => {
      expect(vm.$el.querySelectorAll(navigationSelector))
        .to.have.length(3);
    });

    describe('the first link', () => {
      it('should have the correct text', () => {
        expect(vm.$el.querySelectorAll(navigationSelector)[0].textContent)
          .to.equal('Projects');
      });

      it('should have the correct title', () => {
        expect(vm.$el.querySelectorAll(navigationSelector)[0].getAttribute('title'))
          .to.equal('Projects');
      });

      it('should have the correct link', () => {
        expect(vm.$el.querySelectorAll(navigationSelector)[0].href)
          .to.equal('http://localhost:9876/context.html#projects');
      });
    });

    describe('the second link', () => {
      it('should have the correct text', () => {
        expect(vm.$el.querySelectorAll(navigationSelector)[1].textContent)
          .to.equal('Who We Are');
      });

      it('should have the correct title', () => {
        expect(vm.$el.querySelectorAll(navigationSelector)[1].getAttribute('title'))
          .to.equal('About Us');
      });

      it('should have the correct link', () => {
        expect(vm.$el.querySelectorAll(navigationSelector)[1].href)
          .to.equal('http://localhost:9876/context.html#about');
      });
    });

    describe('the third link', () => {
      it('should have the correct text', () => {
        expect(vm.$el.querySelectorAll(navigationSelector)[2].textContent)
          .to.equal('Github');
      });

      it('should have the correct title', () => {
        expect(vm.$el.querySelectorAll(navigationSelector)[2].getAttribute('title'))
          .to.equal('Github');
      });

      it('should have the correct link', () => {
        expect(vm.$el.querySelectorAll(navigationSelector)[2].href)
          .to.equal('https://github.com/uchuuio');
      });
    });
  });
});
