import styled from '@emotion/styled';
import { mediaBreackpoint } from '../../utils/styleVariables';

export const Container = styled.div`\
  margin: 0 auto;
  min-height: 100vh;
  position: relative;

  @media screen and (max-width: ${mediaBreackpoint.preMobile}) {
    max-width: 320px;
  }

  @media screen and (min-width: ${mediaBreackpoint.mobile}) {
    width: 320px;
  }

  @media screen and (min-width: ${mediaBreackpoint.tablet}) {
    width: 768px;
  }

  @media screen and (min-width: ${mediaBreackpoint.desktop}) {
    width: 1360px;
  }
`;
