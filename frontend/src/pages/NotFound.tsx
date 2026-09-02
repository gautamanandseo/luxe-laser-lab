import { Navigate } from "react-router-dom";

/**
 * Any unknown route is redirected to the homepage.
 * This satisfies the "all 404 pages go to home page" requirement
 * for both client-side routing and (combined with .htaccess
 * ErrorDocument 404) server-side fallbacks.
 */
const NotFound = () => {
  return <Navigate to="/" replace />;
};

export default NotFound;
