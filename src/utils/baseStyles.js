import { css } from '@emotion/react';
import { color, defaultTransition, mediaBreackpoint } from './styleVariables';

export const baseButtonStyles = css`
   font-weight: 400;
   font-size: 16px;
   line-height: 1.6;
   text-align: center;
   color: #ffffff;
   border-radius: 5px;
   padding: 10px;
   transition: all ${defaultTransition};

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      font-size: 18px;
      line-height: 1.56;
   }
`;

export const outlineButtonStyles = css`
   border: 1px solid ${color.lightText};
   padding: 10px 36px;
   display: inline-block;
   background-color: transparent;
`;

export const baseSectionTitleStyles = css`
   font-weight: 300;
   font-size: 38px;
   line-height: 1.26;
`;
