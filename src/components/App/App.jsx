import { Container } from './App.styled';
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { About } from '../About/About';
import { Cases } from '../Cases/Cases';
import { Team } from '../Team/Team';
import { SocialLinks } from '../SocialLinks/SocialLinks';

export const App = () => {
   return (
      <Container>
         <Header />
         <main>
            <Hero />
            <About />
            <Cases />
            <Team />
         </main>
      </Container>
   );
};
