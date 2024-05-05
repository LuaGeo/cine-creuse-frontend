import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

/* ----- PAGES ----- */
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import MovieDetails from "./pages/MovieDetails";
import GenreMoviesPage from "./pages/GenreMoviesPage";

/* ----- COMPONENTS ----- */
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  console.log("Rendering App");
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isSignUpVisible, setSignUpVisible] = useState(false);

  const handleLoginClose = () => setLoginVisible(false);
  const handleSignUpClose = () => setSignUpVisible(false);

  const handleLoginOpen = () => {
    setLoginVisible(true);
    setSignUpVisible(false);
  };

  const handleSignUpOpen = () => {
    setSignUpVisible(true);
    setLoginVisible(false);
  };
  return (
    <Router>
      <div>
        <Header
          onLoginClick={handleLoginOpen}
          onSignUpClick={handleSignUpOpen}
        />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/movie/:movieId" element={<MovieDetails />} />
            <Route path="/genre/:genreId" element={<GenreMoviesPage />} />
          </Routes>
        </main>
        <Footer />
        <Login isVisible={isLoginVisible} onClose={handleLoginClose} />
        <SignUp isVisible={isSignUpVisible} onClose={handleSignUpClose} />
      </div>
    </Router>
  );
}

export default App;
