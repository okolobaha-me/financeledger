import { Navigate, NavigationLink } from './Navigation.styled';
import { navigationList } from './navigationList';

export const Navigation = ({ offset }) => {
   return (
      <nav>
         <Navigate>
            {navigationList.map(({ link, name }) => (
               <li key={name}>
                  <NavigationLink
                     to={link}
                     spy={true}
                     smooth={true}
                     offset={-offset}
                     duration={500}
                  >
                     {name}
                  </NavigationLink>
               </li>
            ))}
         </Navigate>
      </nav>
   );
};
