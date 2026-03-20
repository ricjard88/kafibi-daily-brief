import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HashScroll = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const elementId = decodeURIComponent(location.hash.slice(1));

    const scrollToElement = () => {
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    requestAnimationFrame(scrollToElement);
  }, [location.hash, location.pathname]);

  return null;
};

export default HashScroll;
