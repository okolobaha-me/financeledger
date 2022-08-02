import { Case, CasesSection, Gallery } from './Cases.styled';
import { Subtitle, Text, Title } from '../Typography/Typography.styled';
import { caseList } from './caseList';
import { Picture } from '../Picture/Picture';

export const Cases = () => {
   return (
      <CasesSection>
         <Subtitle margin={'big'}>This is what we do</Subtitle>
         <Title>Business Cases</Title>
         <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
         </Text>
         <Gallery>
            {caseList.map(item => (
               <Case key={item.name}>
                  <Picture {...item} />
               </Case>
            ))}
         </Gallery>
      </CasesSection>
   );
};
