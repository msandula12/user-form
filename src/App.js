import { useState } from "react";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    confirmPassword: "",
    password: "",
    userName: "",
  });

  const hasPasswordInput = !!formData.confirmPassword && !!formData.password;
  const passwordsMatch =
    hasPasswordInput && formData.confirmPassword === formData.password;
  const hasValidFormData = !!formData.userName && passwordsMatch;

  function submitUserData(event) {
    event.preventDefault();
  }

  function updateField(event) {
    setFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <main className="App">
      <form className="Form">
        <label className="Label" htmlFor="username">
          Username
          <input
            className="Input"
            id="userName"
            name="userName"
            onChange={updateField}
            type="text"
            value={formData["userName"]}
          />
        </label>
        <label className="Label" htmlFor="password">
          Password
          <input
            className="Input"
            id="password"
            name="password"
            onChange={updateField}
            type="password"
            value={formData["password"]}
          />
        </label>
        <label className="Label" htmlFor="confirmPassword">
          Confirm password
          <input
            className="Input"
            id="confirmPassword"
            name="confirmPassword"
            onChange={updateField}
            type="password"
            value={formData["confirmPassword"]}
          />
          {hasPasswordInput && (
            <span
              className={`PasswordValidation ${
                passwordsMatch ? "success" : "error"
              }`}
            >
              {passwordsMatch ? "Passwords match!" : "Paswords must match."}
            </span>
          )}
        </label>
        <button
          className="Button"
          disabled={!hasValidFormData}
          onClick={submitUserData}
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default App;
