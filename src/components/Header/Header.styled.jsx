import styled from '@emotion/styled';
import {
   color,
   defaultFont,
   defaultTransition,
   mediaBreackpoint,
} from '../../utils/styleVariables';
import { Link } from 'react-scroll';

export const Head = styled.header`
   z-index: 999;
   color: ${color.lightText};
   padding: 21px 12px;
   display: flex;
   flex-direction: column;
   justify-content: center;

   position: fixed;

   background-color: ${({ showBg }) =>
      showBg ? 'transparent' : 'rgba(58,58,58,0.8)'};

   @media screen and (max-width: ${mediaBreackpoint.preMobile}) {
      max-width: ${mediaBreackpoint.mobile};
   }

   @media screen and (min-width: ${mediaBreackpoint.mobile}) {
      width: ${mediaBreackpoint.mobile};
   }

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      justify-content: space-between;
      flex-direction: row;

      align-items: center;
      padding: 20px 22px 20px 32px;
      width: ${mediaBreackpoint.tablet};
   }

   @media screen and (min-width: ${mediaBreackpoint.desktop}) {
      padding: 12px 8px 12px 28px;

      width: ${mediaBreackpoint.desktop};
   }
`;

export const NamedLogo = styled(Link)`
   color: ${color.mainAccent};

   display: flex;
   align-items: center;

   transition: all ${defaultTransition};

   :hover {
      transform: scale(1.05);
      color: ${color.lightAccent};
   }

   @media screen and (max-width: ${mediaBreackpoint.tablet}) {
      margin: 0 auto 13px;
   }
`;

export const LogoText = styled.h1`
   font-family: ${defaultFont};
   font-weight: 400;
   font-size: 32px;
   line-height: 1.32;
   margin-left: 6px;
   display: inline-block;

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      font-size: 35px;
      line-height: 1.21;
   }
`;

export const WhiteLogoText = styled.span`
   color: ${color.lightText};

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      padding-left: 13px;
   }
`;
