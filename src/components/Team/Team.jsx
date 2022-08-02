import { MemberList, TeamSection } from './Team.styled';
import { Subtitle, Text, Title } from '../Typography/Typography.styled';
import { MemberCard } from './MemberCard/MemberCard';
import { members } from './members';

export const Team = () => {
   return (
      <TeamSection>
         <Subtitle margin={'big'}>Who we are</Subtitle>
         <Title>Our Professional Team</Title>
         <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
         </Text>
         <MemberList>
            {members.map(member => (
               <MemberCard {...member} />
            ))}
         </MemberList>
      </TeamSection>
   );
};
