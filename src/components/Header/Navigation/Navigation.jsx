import { Navigate, NavigationLink } from "./Navigation.styled";
import { navigationList } from "./navigationList";

export const Navigation = () => {
  //убираем обновление страницы при клике на линку
  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  return (
    <nav>
      <Navigate>
        {navigationList.map(({ link, name }) => (
          <li key={name}>
            <NavigationLink onClick={handleLinkClick} href={link}>
              {name}
            </NavigationLink>
          </li>
        ))}
      </Navigate>
    </nav>
  );
};
