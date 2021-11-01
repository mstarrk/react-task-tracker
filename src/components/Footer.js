import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      {location.pathname === "/" && <Link to="/about">About</Link>}
      {location.pathname !== "/" && <Link to="/">Go Back</Link>}
    </footer>
  );
};

export default Footer;
