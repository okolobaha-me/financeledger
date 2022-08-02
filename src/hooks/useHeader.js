import { useCallback, useEffect, useRef, useState } from "react";

export const useHeader = () => {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);
  const ref = useRef(null);
  const [showWidth, setShowWidth] = useState(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > showWidth) {
      setIsHeaderTransparent(false);
    }
    if (window.scrollY < showWidth) {
      setIsHeaderTransparent(true);
    }
  }, [showWidth]);

  const handleResize = () => {
    const width = ref.current.clientWidth <= 320 ? 120 : 70;
    setShowWidth(width);
  };

  useEffect(() => {
    setShowWidth(ref.current.clientWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll]);

  return { ref, isHeaderTransparent };
};
