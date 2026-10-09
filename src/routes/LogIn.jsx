import { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./App.css";

export default function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-icon">📓</div>

        <h1>Książkarnia</h1>
        <p className="login-subtitle">
          Twoje miejsce w świecie książek
        </p>

        <h2>Zaloguj się</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="login-email">Adres e-mail</label>
          <input
            id="login-email"
            type="email"
            placeholder="Wpisz email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="login-password">Hasło</label>
          <input
            id="login-password"
            type="password"
            placeholder="Wpisz hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-submit">
            Zaloguj się
          </button>
        </form>

        <p className="login-footer">
          Odkryj swoją następną ulubioną książkę.
        </p>

        <p>
          Nie masz konta? <Link to="/Sign-Up">Zarejestruj się</Link>
        </p>
      </div>
    </div>
  );
}
