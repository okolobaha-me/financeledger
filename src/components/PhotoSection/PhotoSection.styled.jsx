import styled from '@emotion/styled';
import { color, mediaBreackpoint } from '../../utils/styleVariables';
import { baseButtonStyles, outlineButtonStyles } from '../../utils/baseStyles';

export const PhotoSection = styled.section`
   position: relative;
   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      grid-template-columns: 368px 400px;
   }
   overflow: hidden;
`;
export const PicWrapper = styled.div`
   overflow: hidden;
   height: ${({ mobileH }) => mobileH};

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      position: absolute;
      width: 368px;
      height: 100%;
      bottom: 0;
      left: ${({ direction }) => (direction === 'direct' ? '0' : '400px')};

      & img {
         position: absolute;
         left: 50%;
         top: 50%;
         transform: translateY(-50%) translateX(-50%);
      }
   }

   @media screen and (min-width: ${mediaBreackpoint.desktop}) {
      left: ${({ direction }) => (direction === 'direct' ? '0' : '690px')};
      width: 670px;

      & img {
         ${({ alignmentDirection }) =>
            alignmentDirection === 'width'
               ? 'width: auto; height: 100%;'
               : 'width: 100%; height: auto;'};
      }
   }
`;
export const InfoWrapper = styled.div`
   padding: 40px 30px;
   background-color: ${({ color }) => color};
   color: ${color.lightText};

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      ${({ direction }) =>
         direction === 'direct' ? 'margin-left: 368px' : 'margin-right: 368px'};
      width: 400px;
      padding: 40px 53px 40px 32px;
   }

   @media screen and (min-width: ${mediaBreackpoint.desktop}) {
      ${({ direction }) =>
         direction === 'direct' ? 'margin-left: 670px' : 'margin-right: 670px'};
      width: 690px;

      padding: 80px 64px 80px 20px;
   }
`;

export const Button = styled.button`
   ${baseButtonStyles};
   ${outlineButtonStyles};

   :hover {
      background-color: ${color.lightText};
      color: ${({ color }) => color};
   }
`;
