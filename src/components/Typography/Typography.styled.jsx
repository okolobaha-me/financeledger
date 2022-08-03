import styled from '@emotion/styled';
import { mediaBreackpoint } from '../../utils/styleVariables';
import { baseSectionTitleStyles } from '../../utils/baseStyles';

export const Subtitle = styled.p`
   font-weight: 400;
   font-size: 18px;
   line-height: 1.66;
   margin-bottom: ${({ margin }) => (margin === 'big' ? '24px' : '8px')};

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      font-size: 20px;
   }
`;

export const Title = styled.h2`
   ${baseSectionTitleStyles};
   margin-bottom: 24px;
`;

export const Text = styled.p`
   font-weight: 400;
   font-size: 16px;
   line-height: 1.56;
   margin-bottom: 24px;

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      font-size: 18px;
   }
`;
