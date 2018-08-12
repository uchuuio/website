import React, { Component } from 'react';
import styled from 'styled-components';

import Member from './Member';
import SamImg from './pictures/sam.jpg';
import JessmImg from './pictures/jess.jpg';

const About = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1024px;
  max-width: 64rem;
  padding: 16px;
  padding: 1rem;

  @media screen and (min-width: 30em) {
    max-width: 96rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const AboutTitle = styled.h3`
  font-size: 36px;
  font-size: 2.25rem;
  margin-bottom: 4px;
  margin-bottom: .25rem;
`;

const Members = styled.div`
  &:after,
  &:before {
    content: " ";
    display: table;
  }

  @media screen and (min-width: 30em) {
    padding-left: .5rem;
    padding-right: .5rem;
  }
`;

class AboutComponent extends Component {
  render() {
    return (
      <About id="about">
        <AboutTitle>Who We Are</AboutTitle>
        <p>uchuu is a creative multimedia studio incorporating all aspects of multimedia with web development at the forefront. Our team has worked on not only web development but music and videos too. Set up and lead by tomo in the style of Japanese Circles such as Supercell & Honeyworks where the members of the group are not all musicians or artists but come together to work on projects together. Members are encouraged to share their work with other members so we can all lean on each other for support and feedback making everything we do the best it can be!</p>
        <p>The team is currently made of:</p>
        <Members>
          <Member
            image="https://avatars3.githubusercontent.com/u/1489059?v=3&s=460"
            name="tomo"
            position="lead"
            description="tomo leads the group working mostly as a developer though is known to do music. tomo likes to work in Javascript and has a great keeness for frontend development. In his spare time, he is learning Japanese, drumming and playing rhythm games."
            twitter="tomouchuu"
            github="tomouchuu"
            website="https://tomo.uchuu.io"
          />

          <Member
            image={JessmImg}
            name="jess"
            position="musician"
            description="jess is the group's primary musician and colloborates with tomo and many artists outside of the uchuu group. When not singing she likes to dream about pugs."
            twitter="jessicamoorevox"
            facebook="jessicamoorevox"
            soundcloud="jessicamoorevox"
            youtube="UC_MEMzfDCWIQZHUptsJmEVw"
            website="https://jessicamoorevox.tumblr.com/"
          />

          <Member
            image={SamImg}
            name="sam"
            position="developer"
            description="sam is primarily a backend developer and has been working on disbott with tomo. He is relatively new to development but has great passion for his work and loves to learn. When not developing, Sam likes to play video games."
            twitter="Mcsamwich_"
            github="80cmdude"
          />
        </Members>
      </About>
    );
  }
}

export default AboutComponent;
