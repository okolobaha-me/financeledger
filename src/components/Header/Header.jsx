import { Head, LogoText, NamedLogo, WhiteLogoText } from './Header.styled';
import { Logo } from '../Icons/Logo';
import { Navigation } from './Navigation/Navigation';
import { useHeader } from '../../hooks/useHeader';

export const Header = () => {
   const { ref, isHeaderTransparent } = useHeader();
   return (
      <Head ref={ref} showBg={isHeaderTransparent}>
         <NamedLogo
            to={'hero'}
            spy={true}
            smooth={true}
            offset={-122}
            duration={500}
         >
            <Logo />
            <LogoText>
               Finance<WhiteLogoText>Ledger</WhiteLogoText>
            </LogoText>
         </NamedLogo>
         <Navigation />
      </Head>
   );
};
