import { Picture } from '../Picture/Picture';
import webp from '../../images/home/blog.webp';
import webpX2 from '../../images/home/blog@2x.webp';
import jpg from '../../images/home/blog.jpg';
import jpgX2 from '../../images/home/blog@2x.jpg';
import { Subtitle, Text, Title } from '../Typography/Typography.styled';
import {
   Button,
   InfoWrapper,
   PhotoSection,
   PicWrapper,
} from '../PhotoSection/PhotoSection.styled';
import { color } from '../../utils/styleVariables';

const photo = {
   webp,
   webpX2,
   jpg,
   jpgX2,
   name: 'Our team',
};

export const Blog = () => {
   const direction = 'reverse';
   const clr = color.secondaryAccent;
   return (
      <PhotoSection id={'blog'}>
         <PicWrapper
            direction={direction}
            alignmentDirection={'height'}
            mobileH={'240px'}
         >
            <Picture {...photo} />
         </PicWrapper>
         <InfoWrapper direction={direction} color={clr}>
            <Subtitle nargin={'small'}>What you are looking for</Subtitle>
            <Title>We provide bespoke solutions</Title>
            <Text>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Voluptate, ipsum dignissimos quae laudantium asperiores nam
               aliquid impedit harum illum dolore explicabo ab dolores itaque
               rerum temporibus doloribus iste maiores deleniti?
            </Text>
            <Button color={clr}>Read more</Button>
         </InfoWrapper>
      </PhotoSection>
   );
};
