import { Link, LinkList } from './SocialLinks.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faFacebook,
   faYoutube,
   faTwitter,
   faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

export const SocialLinks = ({ fb, twitter, youtube, linkedin }) => {
   return (
      <LinkList>
         <li>
            <Link href={fb}>
               <FontAwesomeIcon icon={faFacebook} />
            </Link>
         </li>
         <li>
            <Link href={twitter}>
               <FontAwesomeIcon icon={faTwitter} />
            </Link>
         </li>
         <li>
            <Link href={youtube}>
               <FontAwesomeIcon icon={faYoutube} />
            </Link>
         </li>
         <li>
            <Link href={linkedin}>
               <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
         </li>
      </LinkList>
   );
};
