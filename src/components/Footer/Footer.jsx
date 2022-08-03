import { Foot, Text } from './Footer.styled';
import { SocialLinks } from '../SocialLinks/SocialLinks';

export const Footer = () => {
   return (
      <Foot>
         <SocialLinks />
         <Text>Copyright © 2021 - FinanceLedger</Text>
      </Foot>
   );
};
