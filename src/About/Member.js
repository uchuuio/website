import React, { Component } from 'react';
import styled from 'styled-components';

import SocialMedia from './../SocialMedia';

const Member = styled.div`
  _display: inline;
  float: left;
  padding: 8px;
  padding: .5rem;
  width: 100%;
  @media screen and (min-width: 30em) {
    width: 33%;
  }
`;

const MemberImg = styled.img`
  border-radius: 100%;
  border-style: none;
  display: block;
  margin: 0 auto;
  max-width: 100%;
  @media screen and (min-width: 30em) {
    width: 50%;
  }
`;

class MemberComponent extends Component {
  render() {
    let twitter = null;
    let github = null;
    let facebook = null;
    let soundcloud = null;
    let website = null;
    if (this.props.twitter) { twitter = <SocialMedia network="twitter" url={`https://twitter.com/${this.props.twitter}`} person={this.props.name} size="2x" /> }
    if (this.props.github) { github = <SocialMedia network="github" url={`https://github.com/${this.props.github}`} person={this.props.name} size="2x" /> }
    if (this.props.facebook) { facebook = <SocialMedia network="facebook" url={`https://facebook.com/${this.props.facebook}`} person={this.props.name} size="2x" /> }
    if (this.props.soundcloud) { soundcloud = <SocialMedia network="soundcloud" url={`https://soundcloud.com/${this.props.soundcloud}`} person={this.props.name} size="2x" /> }
    if (this.props.website) { website = <SocialMedia network="website" url={this.props.website} person={this.props.name} size="2x" /> }

    return (
      <Member>
        <MemberImg src={this.props.image} alt={this.props.name} />
        <h4>{this.props.name}</h4>
        <h5>{this.props.position}</h5>
        <p>{this.props.description}</p>
        {twitter}
        {github}
        {facebook}
        {soundcloud}
        {website}
      </Member>
    );
  }
}

export default MemberComponent;
