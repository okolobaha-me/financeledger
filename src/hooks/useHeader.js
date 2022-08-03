import { useCallback, useEffect, useRef, useState } from 'react';

export const useHeader = () => {
   const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);
   const ref = useRef(null);
   const [showHeight, setShowHeight] = useState(120);

   const handleScroll = useCallback(() => {
      if (window.scrollY > ref.current.clientHeight) {
         setIsHeaderTransparent(false);
      }
      if (window.scrollY < ref.current.clientHeight) {
         setIsHeaderTransparent(true);
      }
   }, []);

   const handleResize = () => {
      setShowHeight(ref.current.clientHeight);
   };

   useEffect(() => {
      setShowHeight(ref.current.clientHeight);
   }, []);

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('scroll', handleScroll);
         window.removeEventListener('resize', handleResize);
      };
   }, [handleScroll]);

   return { ref, isHeaderTransparent, showHeight };
};
