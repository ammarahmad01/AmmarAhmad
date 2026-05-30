import { useEffect, useState } from "react";

/**
 * Hook to detect if the viewport is below a certain width (mobile/tablet).
 * @param {number} width - The maximum width in pixels to consider mobile.
 * @returns {boolean} - True if viewport is smaller than the width, false otherwise.
 */
export const useMobile = (width = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${width}px)`);
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [width]);

  return isMobile;
};

export default useMobile;
