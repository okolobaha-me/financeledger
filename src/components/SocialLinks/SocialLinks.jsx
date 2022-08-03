import { Link, LinkList } from './SocialLinks.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faFacebook,
   faYoutube,
   faTwitter,
   faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

export const SocialLinks = ({
   fb = 'https://uk-ua.facebook.com/',
   twitter = 'https://twitter.com/?lang=uk',
   youtube = 'https://www.youtube.com',
   linkedin = 'https://www.linkedin.com',
   hoverType = 'color',
}) => {
   return (
      <LinkList>
         <li>
            <Link href={fb} hoverType={hoverType}>
               <FontAwesomeIcon icon={faFacebook} />
            </Link>
         </li>
         <li>
            <Link href={twitter} hoverType={hoverType}>
               <FontAwesomeIcon icon={faTwitter} />
            </Link>
         </li>
         <li>
            <Link href={youtube} hoverType={hoverType}>
               <FontAwesomeIcon icon={faYoutube} />
            </Link>
         </li>
         <li>
            <Link href={linkedin} hoverType={hoverType}>
               <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
         </li>
      </LinkList>
   );
};
