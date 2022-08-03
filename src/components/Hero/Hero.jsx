import { Button, ButtonIcon, HeroStyled, Slogan, Title } from './Hero.styled';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
   return (
      <HeroStyled iв="hero">
         <Title>The Sky Is The Limit</Title>
         <Slogan>We provide world class financial assistance</Slogan>
         <Button type="button">
            <ButtonIcon icon={faAngleRight} />
            Read More
         </Button>
      </HeroStyled>
   );
};
