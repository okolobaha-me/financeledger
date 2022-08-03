import styled from '@emotion/styled';
import { baseButtonStyles } from '../../utils/baseStyles';
import {
   color,
   defaultTransition,
   mediaBreackpoint,
} from '../../utils/styleVariables';

export const Input = styled.input`
   padding: 10px 8px 1px;
   border: none;
   display: block;

   font-weight: 400;
   font-size: 18px;
   line-height: 1.56;
   color: ${color.darkText};
   width: 100%;
`;

export const Button = styled.button`
   ${baseButtonStyles};
   width: 100%;
   background-color: ${color.mainAccent};
   margin-top: 40px;

   @media screen and (min-width: ${mediaBreackpoint.desktop}) {
      margin-top: 60px;
   }
`;

export const InputsWrapper = styled.div`
   margin: 0;
   padding: 0;

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      padding-right: 12px;
   }

   @media screen and (min-width: ${mediaBreackpoint.desktop}) {
      padding-right: 22px;
   }
`;

export const Label = styled.label`
   display: block;
   position: relative;

   :not(:last-child) {
      margin-bottom: 32px;
   }
`;

export const Error = styled.p`
   display: flex;
   align-items: center;
   color: #ba1818;
   position: absolute;
   left: 0;
   bottom: -5px;
   transform: translateY(100%);
`;

export const LabelTitle = styled.span`
   font-weight: 400;
   font-size: 18px;
   line-height: 1.56;
   color: #808080;
   transition: all ${defaultTransition};

   position: absolute;
   left: 5px;
   top: 60%;
   transform: translateY(
      ${({ isFocus }) => {
         return isFocus ? '-200%' : '-60%';
      }}
   );
`;
