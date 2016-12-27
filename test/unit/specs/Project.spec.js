import Vue from 'vue';
import Project from 'src/components/Project';

describe('Project.vue', () => {
  let vm = null;

  before(() => {
    vm = new Vue({
      el: document.createElement('div'), // eslint-disable-line
      render: h => h(Project, {
        props: {
          bg: 'red',
          color: 'blue',
          textalign: 'center',
          name: 'Project Name',
          tag: 'A tagline for the project',
          link: 'https://www.uchuu.io',
          github: 'https://github.com/uchuuio',
        },
      }),
    });
  });

  it('should render the correct styles', () => {
    expect(vm.$el.getAttribute('style'))
        .to.equal('background-color: red; color: blue; text-align: center; background-position: initial initial; background-repeat: initial initial;');
  });

  it('should render correct project name', () => {
    expect(vm.$el.querySelector('.project h3').textContent)
      .to.equal('Project Name');
  });

  it('should render correct project tagline', () => {
    expect(vm.$el.querySelector('.project .lead').textContent)
      .to.equal('A tagline for the project');
  });

  describe('the github link', () => {
    it('should render correct project link', () => {
      expect(vm.$el.querySelector('.project a.github-link').href)
        .to.equal('https://github.com/uchuuio');
    });

    it('should render correct project link title', () => {
      expect(vm.$el.querySelector('.project a.github-link').getAttribute('title'))
        .to.equal('Check out Project Name on Github');
    });
  });

  describe('the project link', () => {
    it('should render correct project link', () => {
      expect(vm.$el.querySelector('.project a.project-link').href)
        .to.equal('https://www.uchuu.io/');
    });

    it('should render correct project link title', () => {
      expect(vm.$el.querySelector('.project a.project-link').getAttribute('title'))
        .to.equal('View Project Name');
    });

    it('should render correct project link style', () => {
      expect(vm.$el.querySelector('.project a.project-link').getAttribute('style'))
        .to.equal('color: blue;');
    });
  });
});
