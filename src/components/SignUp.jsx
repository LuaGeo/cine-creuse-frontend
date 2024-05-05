const SignUp = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h1>S'inscrire</h1>
        <form>
          <input type="text" placeholder="Nom d'utilisateur" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mot de passe" />
          <button type="submit">S'inscrire</button>
        </form>
        <p>
          Tu as déjà un compte ? <span onClick={onClose}>Connecte-toi</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
