import styled from "@emotion/styled";
import { color, mediaBreackpoint } from "../../../utils/styleVariables";

export const Navigate = styled.ul`
  display: flex;
  justify-content: center;
`;

export const NavigationLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;

  padding: 6px;

  color: ${color.lightText};

  :hover {
    border-bottom: 2px solid ${color.mainAccent};
  }

  @media screen and (min-width: ${mediaBreackpoint.tablet}) {
    padding: 10px;
    font-size: 18px;
    line-height: 1.56;
  }

  @media screen and (min-width: ${mediaBreackpoint.desktop}) {
    padding: 10px 20px;
  }
`;
