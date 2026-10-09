import { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./App.css";

export default function SignUp() {
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");

const handleSubmit = (e) => {
e.preventDefault();

```
if (password !== confirmPassword) {
  setError("Hasła nie są identyczne.");
  return;
}

setError("");
navigate("/Log-In");
```

};

return ( <div className="login-page"> <div className="login-card"> <div className="login-icon">📓</div> <h1>Książkarnia</h1> <p className="login-subtitle">
Twoje miejsce w świecie książek </p>

```
    <h2>Utwórz konto</h2>

    <form onSubmit={handleSubmit}>
      <label htmlFor="signup-email">Adres e-mail</label>
      <input
        id="signup-email"
        type="email"
        placeholder="Wpisz email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="signup-password">Hasło</label>
      <input
        id="signup-password"
        type="password"
        placeholder="Wpisz hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <label htmlFor="signup-confirm">Powtórz hasło</label>
      <input
        id="signup-confirm"
        type="password"
        placeholder="Powtórz hasło"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      {error && <p className="error-message">{error}</p>}

      <button type="submit" className="login-submit">
        Zarejestruj się
      </button>
    </form>

    <p>
      Masz już konto? <Link to="/Log-In">Zaloguj się</Link>
    </p>
  </div>
</div>
```

);
}
