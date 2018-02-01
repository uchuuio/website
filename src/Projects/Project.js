import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands'
import styled from 'styled-components';

fontawesome.library.add(brands);

const Project = styled.div`
  background: ${props => props.background};
  color: ${props => props.color};
  padding: 32px;
  padding: 2rem;
  text-align: ${props => props.textalign};
`;

const ProjectTitle = styled.h3`
  display: inline;
  font-size: 36px;
  font-size: 2.25rem;
  margin-top: 0;
`;

const ProjectGithub = styled.a`
  color: ${props => props.color};
  font-size: 24px;
  font-size: 1.5rem;
`

const ProjectTag = styled.p``;

const ProjectLink = styled.a`
  color: ${props => props.color};
  margin-bottom: 0;
`;

class ProjectComponent extends Component {
  render() {
    return (
      <Project background={this.props.bg} color={this.props.color} textalign={this.props.textalign}>
        <ProjectTitle>{this.props.name} </ProjectTitle>
        <ProjectGithub href={this.props.github} title={`Check out ${this.props.name} on Github`} className="github-link" style={{color: this.props.color}}><FontAwesomeIcon icon={['fab', 'github']} /></ProjectGithub>
        <ProjectTag>{this.props.tag}</ProjectTag> <ProjectLink href={this.props.link} title={`View ${this.props.name}`} color={this.props.color}>View Project</ProjectLink>
      </Project>
    );
  }
}

export default ProjectComponent;
