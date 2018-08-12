import React, { Component } from 'react';
import styled from 'styled-components';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands'
import faGlobe from '@fortawesome/fontawesome-pro-regular/faGlobe';
fontawesome.library.add(brands, faGlobe);

function IconStyling(color) {
  return `
    color: ${color};
    transition: all .2s;
    &:hover {
      color: #FF4C3B;
      transition: all .2s;
    }
  `;
};

const SocialIcon = styled.a`
margin: 0 5px;

& .facebook {
  ${IconStyling('#3b5998')}
}

& .twitter {
  ${IconStyling('#55acee')}
}

& .instagram {
  ${IconStyling('#3f729b')}
}

& .github {
  ${IconStyling('#333333')}
}

& .trello {
  ${IconStyling('#0079bf')}
}

& .mastodon {
  ${IconStyling('#189efc')}
}

& .discord {
  ${IconStyling('#7289da')}
}

& .email {
  ${IconStyling('#FF4136')}
}

& .blog {
  ${IconStyling('#2ECC40')}
}

& .spotify {
  ${IconStyling('#1db954')}
}

& .snapchat {
  ${IconStyling('#fffc00')}
}

& .youtube {
  ${IconStyling('#ff0000')}
}

& .twitch {
  ${IconStyling('#6441a5')}
}

& .soundcloud {
  ${IconStyling('#ff8800')}
}

& .linkedin {
  ${IconStyling('#0077b5')}
}

& .website {
  ${IconStyling('#0077b5')}
}
`;

class SocialMedia extends Component {
  icon() {
    if (this.props.network === 'website') {
      return ['far', 'globe'];
    }
    return ['fab', this.props.network];
  }

  render() {
    return (
      <SocialIcon href={this.props.url} title={`Find ${this.props.person} on ${this.props.network}`}>
        <FontAwesomeIcon icon={this.icon()} size={this.props.size} className={`socialicon ${this.props.network}`} />
      </SocialIcon>
    );
  }
}

export default SocialMedia;