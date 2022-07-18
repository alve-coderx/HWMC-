import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Main(props) {
  const location = useLocation();

  // Restore scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export default Main;
