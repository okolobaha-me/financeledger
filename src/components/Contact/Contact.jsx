import webp from '../../images/home/contact.webp';
import webpX2 from '../../images/home/contact@2x.webp';
import jpg from '../../images/home/contact.jpg';
import jpgX2 from '../../images/home/contact@2x.jpg';

import { PhotoSection, PicWrapper } from '../PhotoSection/PhotoSection.styled';
import { color } from '../../utils/styleVariables';
import { Picture } from '../Picture/Picture';
import { Form } from '../Form/Form';
import { FormWrapper, Title } from './Contact.styled';

const photo = {
   webp,
   webpX2,
   jpg,
   jpgX2,
   name: 'Our team',
};

export const Contact = () => {
   const direction = 'direct';
   return (
      <PhotoSection>
         <PicWrapper
            direction={direction}
            mobileH={'220px'}
            alignmentDirection={'width'}
         >
            <Picture {...photo} />
         </PicWrapper>
         <FormWrapper direction={direction} color={color.secondaryBg}>
            <Title>Request Callback</Title>
            <Form />
         </FormWrapper>
      </PhotoSection>
   );
};
