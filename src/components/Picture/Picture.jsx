export const Picture = ({ webp, webpX2, jpg, jpgX2, name }) => {
   return (
      <picture>
         <source srcSet={`${webp} 1x, ${webpX2} 2x" type="image/webp`} />
         <source srcSet={`${jpg} 1x, ${jpgX2} 2x" type="image/jpeg`} />
         <img src={jpg} alt={name} />
      </picture>
   );
};
