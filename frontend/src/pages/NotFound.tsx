import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * Any unknown route is redirected to the homepage.
 * This satisfies the "all 404 pages go to home page" requirement
 * for both client-side routing and (combined with .htaccess
 * ErrorDocument 404) server-side fallbacks.
 */
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.warn("404 redirected to home:", location.pathname);
  }, [location.pathname]);

  return <Navigate to="/" replace />;
};

export default NotFound;
