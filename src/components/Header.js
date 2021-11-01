import Button from "./Button";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({ title, onAdd, showAdd }) => {

  const location = useLocation();

  return (
    <header className="header">
      <h1>
        {title}
      </h1>
      {location.pathname === "/" && (
        <Button
          close={showAdd}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

export default Header;
