import { Link } from "react-router-dom";
import creuseLogo from "../assets/creuse-logo.png";
import SearchBar from "./SearchBar";

const Header = ({ onSignUpClick, onLoginClick }) => {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
        <div className="header_container">
          <div className="logo_container">
            <Link to="/">
              <img src={creuseLogo} alt="Ciné La Creuse Logo" />
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="cine_name_container">
                <h1>Ciné</h1>
                <h1>La Creuse</h1>
              </div>
            </Link>
          </div>
          <SearchBar />
          <div className="buttons_container">
            <button onClick={onSignUpClick}>S'inscrire</button>
            <span>Utilisateur</span>
            <button onClick={onLoginClick}>Se connecter</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
