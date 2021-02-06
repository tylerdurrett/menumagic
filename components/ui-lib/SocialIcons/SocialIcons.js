import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faInstagram, faTwitter, faLinkedin, faYoutube, faGithub, faCodepen, faBehance } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import Stack from '../Stack/Stack';

config.autoAddCss = false;
library.add(faLink, faInstagram, faTwitter, faLinkedin, faYoutube, faGithub, faCodepen, faBehance);

const icons = {
  web: ['fas', 'link'],
  instagram: ['fab', 'instagram'],
  twitter: ['fab', 'twitter'],
  linkedin: ['fab', 'linkedin'],
  youtube: ['fab', 'youtube'],
  github: ['fab', 'github'],
  codepen: ['fab', 'codepen'],
  behance: ['fab', 'behance'],
};

export function SocialIcon({platform}) {
  return (
    <FontAwesomeIcon icon={icons[platform]} />
  );
}

export default function SocialIcons({ socialLinks = [], newWindow = false }) {
  return (
    <Stack direction="row" justify="space" align="center">
    {socialLinks.map(socialLink => (
      <a 
        href={socialLink.url}
        key={socialLink.url}
        target={newWindow ? '_blank' : '_self'}>
        <SocialIcon platform={socialLink.platform}/>
      </a>
    ))}
    </Stack>
  );
}