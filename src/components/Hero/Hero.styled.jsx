import styled from '@emotion/styled';
import bg from '../../images/home/showcase.jpg';
import retinaBg from '../../images/home/showcase@2x.jpg';
import { color, mediaBreackpoint } from '../../utils/styleVariables';
import { baseButtonStyles } from '../../utils/baseStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeroStyled = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   color: ${color.heroText};
   padding-top: 140px;
   padding-bottom: 95px;

   background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bg});
   background-size: cover;
   background-position: center;

   @media screen and (min-device-pixel-ratio: 2), (min-resolution: 144dpi) {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
         url(${retinaBg});
      background-size: cover;
      background-position: center;
   }

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      padding: 410px 0;
   }

   @media screen and (min-width: ${mediaBreackpoint.desktop}) {
      padding: 280px 0;
   }
`;

export const Title = styled.h2`
   font-weight: 300;
   font-size: 52px;
   line-height: 1.27;
   text-align: center;
   margin-bottom: 20px;

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      margin-bottom: 24px;
   }
`;

export const Slogan = styled.p`
   font-weight: 400;
   font-size: 22px;
   line-height: 1.67;
   margin-bottom: 24px;

   text-align: center;

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      margin-bottom: 32px;
   }
`;

export const Button = styled.button`
   ${baseButtonStyles};
   background-color: ${color.mainAccent};
   padding-left: 40px;
   padding-right: 30px;

   :hover {
      background-color: ${color.hoverHeroButton};
   }

   @media screen and (min-width: ${mediaBreackpoint.tablet}) {
      padding-left: 30px;
   }
`;

export const ButtonIcon = styled(FontAwesomeIcon)`
   margin-right: 5px;

   @media screen and (max-width: ${mediaBreackpoint.preTablet}) {
      display: none;
   }
`;
