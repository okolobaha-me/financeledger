import { Card, Contacts, Name, PicWrapper, Position } from '../Team.styled';
import { Picture } from '../../Picture/Picture';
import { useState } from 'react';
import { SocialLinks } from '../../SocialLinks/SocialLinks';

export const MemberCard = ({ name, position, photo, contacts }) => {
   const [isShowContacts, setIsShowContacts] = useState(false);

   const showContacts = () => setIsShowContacts(true);
   const hideContacts = () => setIsShowContacts(false);

   return (
      <Card>
         <PicWrapper onMouseEnter={showContacts} onMouseLeave={hideContacts}>
            <Picture {...photo} name={name} />
            {isShowContacts && (
               <Contacts>
                  <SocialLinks {...contacts} hoverType={'opacity'} />
               </Contacts>
            )}
         </PicWrapper>
         <Name>{name}</Name>
         <Position>{position}</Position>
      </Card>
   );
};
