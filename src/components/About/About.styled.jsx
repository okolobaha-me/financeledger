import styled from '@emotion/styled';
import { baseButtonStyles, outlineButtonStyles } from '../../utils/baseStyles';
import { color, mediaBreackpoint } from '../../utils/styleVariables';

export const AboutSection = styled.section`
   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      display: flex;
      align-items: stretch;
      align-content: stretch;
   }
`;

export const PicWrapper = styled.div`
   display: flex;
   justify-content: center;
   overflow: hidden;
   height: 220px;
   position: relative;

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      width: 368px;
      height: 100%;
   }

   @media screen and (min-width: ${mediaBreackpoint.desktop}) {
      width: 670px;
   }

   //& > picture {
   //   height: 100%;
   //   & > img {
   //      height: 100%;
   //   }
   //}
`;

export const InfoWrapper = styled.div`
   padding: 40px 30px;
   background-color: ${color.mainAccent};
   color: ${color.lightText};
   margin-right: 0;
   margin-left: auto;

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      width: 400px;
      padding: 40px 53px 40px 32px;
   }

   @media screen and (min-width: ${mediaBreackpoint.desktop}) {
      width: 690px;
      padding: 80px 64px 80px 20px;
   }
`;

export const Button = styled.button`
   ${baseButtonStyles};
   ${outlineButtonStyles};
`;
