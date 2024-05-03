import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import creuseLogo from "../assets/creuse-logo.png";

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
            <img src={creuseLogo} alt="Ciné La Creuse Logo" />
            <div className="cine_name_container">
              <h1>Ciné</h1>
              <h1>La Creuse</h1>
            </div>
          </div>
          <div className="searchbar">
            <input type="text" placeholder="Rechercher un film..." />
            <FontAwesomeIcon icon={faSearch} className="search_icon" />
          </div>
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
