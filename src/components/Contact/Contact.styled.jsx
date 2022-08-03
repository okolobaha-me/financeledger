import styled from '@emotion/styled';
import { color, mediaBreackpoint } from '../../utils/styleVariables';
import { baseSectionTitleStyles } from '../../utils/baseStyles';

export const FormWrapper = styled.div`
   padding: 40px 20px;
   background-color: ${color.secondaryBg};
   color: ${color.darkText};

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      margin-left: 368px;
      width: 400px;
      padding: 40px 32px;
   }

   @media screen and (min-width: ${mediaBreackpoint.desktop}) {
      margin-left: 670px;
      width: 690px;

      padding: 80px 28px 80px;
   }
`;

export const Title = styled.h2`
   ${baseSectionTitleStyles};
   margin-bottom: 32px;
`;
