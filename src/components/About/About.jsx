import { AboutSection, Button, InfoWrapper, PicWrapper } from './About.styled';
import { Picture } from '../Picture/Picture';
import webp from '../../images/home/people.webp';
import webpX2 from '../../images/home/people@2x.webp';
import jpg from '../../images/home/people.jpg';
import jpgX2 from '../../images/home/people@2x.jpg';
import { Subtitle, Text, Title } from '../Typography/Typography.styled';

const photo = {
   webp,
   webpX2,
   jpg,
   jpgX2,
   name: 'Our team',
};

export const About = () => {
   return (
      <AboutSection>
         <PicWrapper>
            <Picture {...photo} />
         </PicWrapper>
         <InfoWrapper>
            <Subtitle nargin={'small'}>What you are looking for</Subtitle>
            <Title>We provide bespoke solutions</Title>
            <Text>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Voluptate, ipsum dignissimos quae laudantium asperiores nam
               aliquid impedit harum illum dolore explicabo ab dolores itaque
               rerum temporibus doloribus iste maiores deleniti?
            </Text>
            <Button>Read more</Button>
         </InfoWrapper>
      </AboutSection>
   );
};
