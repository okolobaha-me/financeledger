import styled from '@emotion/styled';
import { color, mediaBreackpoint } from '../../utils/styleVariables';

export const CasesSection = styled.section`
   text-align: center;
   color: ${color.darkText};
   padding: 40px 20px;

   @media screen and(min-width: ${mediaBreackpoint.tablet}) {
      padding: 40px 32px;
   }

   @media screen and(min-width: ${mediaBreackpoint.desktop}) {
      padding: 80px 28px;
   }
`;

export const Gallery = styled.ul`
   display: grid;
   grid-gap: 8px;

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 19px;
   }
`;

export const Case = styled.li`
   & > * {
      width: 100%;
      & > * {
         width: 100%;
      }
   }
`;
