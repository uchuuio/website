import React, { Component } from 'react';
import styled from 'styled-components';

import HeroBG from './herobg.jpg';

const Hero = styled.div`
  background-attachment: fixed;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  color: #fff;
  height: 100vh;
  width: 100vw;
`;

const Background = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const Content = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
  z-index: 2;
`;

const Title = styled.h1`
  display: block;
  font-size: 48px;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.25;
  margin: 0;
  text-align: center;

  @media screen and (min-width: 30em) {
    font-size: 6rem;
  }
`;

const SubTitle = styled.h2`
  display: block;
  font-size: 36px;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 32px;
  margin-bottom: 2rem;
  margin-top: -30px;
  text-align: center;
`;

const Navigation = styled.div`
  text-align: center;
`;

const Link = styled.a`
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  color: #fff;
  display: inline-block;
  font-size: 14px;
  font-size: .875rem;
  text-decoration: none;
  transition: all .2s;

  &:visited {
    color: #ddd;
  }

  &:hover {
    color: #FF4C3B;
    transition: all .2s;
  }

  @media screen and (min-width: 30em) {
    font-size: 1rem;
    margin-right: 1rem;
  }
`;

class HeroComponent extends Component {
  render() {
    return (
      <Hero image={HeroBG}>
        <Background />
        <Content>
          <Title>uchuu</Title>
          <SubTitle>宇宙</SubTitle>
          <Navigation>
            <Link href="#projects" title="Our Projects">Projects</Link>
            <Link href="#about" title="Who We Are">Who We Are</Link>
            <Link href="https://github.com/uchuuio" title="Our Github">Github</Link>
          </Navigation>
        </Content>
      </Hero>
    );
  }
}

export default HeroComponent;
