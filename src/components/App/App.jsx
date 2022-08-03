import { Container } from './App.styled';
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { About } from '../About/About';
import { Cases } from '../Cases/Cases';
import { Team } from '../Team/Team';
import { Footer } from '../Footer/Footer';
import { Blog } from '../Blog/Blog';
import { Contact } from '../Contact/Contact';

export const App = () => {
   return (
      <Container>
         <Header />
         <main>
            <Hero />
            <About />
            <Cases />
            <Team />
            <Blog />
            <Contact />
         </main>
         <Footer />
      </Container>
   );
};
