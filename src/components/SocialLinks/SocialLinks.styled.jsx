import styled from '@emotion/styled';
import { color, defaultTransition } from '../../utils/styleVariables';

export const LinkList = styled.ul`
   display: flex;
   gap: 25px;
`;

export const Link = styled.a`
   font-weight: 400;
   font-size: 35px;
   line-height: 1;

   color: ${color.lightText};

   transition: all ${defaultTransition};

   :hover {
      ${({ hoverType }) =>
         hoverType === 'color'
            ? `color: ${color.mainAccent};`
            : `opacity: 0.8;`};
   }
`;
