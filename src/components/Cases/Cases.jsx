import { Case, CasesSection, Gallery } from './Cases.styled';
import { Subtitle, Text, Title } from '../Typography/Typography.styled';
import { caseList } from './caseList';
import { Picture } from '../Picture/Picture';
import FsLightbox from 'fslightbox-react';
import { useState } from 'react';

export const Cases = () => {
   const [toggler, setToggler] = useState(false);

   const images = caseList.map(item => (
      <li key={item.name} onClick={() => setToggler(!toggler)}>
         <Case>
            <Picture {...item} />
         </Case>
      </li>
   ));

   return (
      <CasesSection id={'cases'}>
         <Subtitle margin={'big'}>This is what we do</Subtitle>
         <Title>Business Cases</Title>
         <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
         </Text>
         <Gallery>
            <FsLightbox
               toggler={toggler}
               sources={images}
               sli
               svg={{
                  slideButtons: {
                     next: {
                        title: 'asdasd',
                     },
                  },
               }}
            />
            {images}
         </Gallery>
      </CasesSection>
   );
};
