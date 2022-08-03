import styled from '@emotion/styled';
import {
   defaultTransition,
   mediaBreackpoint,
} from '../../utils/styleVariables';

export const TeamSection = styled.section`
   padding: 40px 20px;
   text-align: center;
`;

export const MemberList = styled.ul`
   display: grid;
   grid-gap: 20px;

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      grid-template-columns: repeat(3, 1fr);
   }
`;

export const Card = styled.li``;

export const PicWrapper = styled.div`
   width: 100%;
   margin-bottom: 16px;
   position: relative;
   transition: all ${defaultTransition};

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      margin-bottom: 14px;
   }

   @media screen and (min-width: ${mediaBreackpoint.desktop}) {
      margin-bottom: 20px;
   }

   & > picture {
      width: 100%;
      & > * {
         width: 100%;
      }
   }

   :hover {
      box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.4);
      transform: scale(1.04);
   }
`;

export const Name = styled.h3`
   font-weight: 400;
   font-size: 23px;
   line-height: 1.25;
   margin-bottom: 12px;

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      font-size: 25px;
      line-height: 1.27;
   }
`;

export const Position = styled.p`
   font-weight: 400;
   font-size: 16px;
   line-height: 1.6;
`;

export const Contacts = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   background-color: rgba(0, 0, 0, 0.6);

   display: flex;
   justify-content: center;
   align-items: center;
`;
