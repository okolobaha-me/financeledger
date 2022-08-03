import styled from '@emotion/styled';
import { color } from '../../utils/styleVariables';

export const Foot = styled.footer`
   padding: 20px 0;
   background-color: ${color.darkText};
   display: flex;
   flex-direction: column;
   gap: 6px;
   justify-content: center;
   align-items: center;
`;

export const Text = styled.p`
   font-weight: 400;
   font-size: 18px;
   line-height: 1.56;
   text-align: center;

   color: ${color.lightText};
`;
