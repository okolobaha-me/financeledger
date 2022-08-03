import { Pic, Pic1 } from './Picture.styled';

export const Picture = ({ webp, webpX2, jpg, jpgX2, name }) => {
   return (
      <Pic1>
         <source srcSet={`${webp} 1x, ${webpX2} 2x" type="image/webp`} />
         <source srcSet={`${jpg} 1x, ${jpgX2} 2x" type="image/jpeg`} />
         <Pic src={jpg} alt={name} />
      </Pic1>
   );
};
