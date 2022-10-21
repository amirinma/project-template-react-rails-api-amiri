import React, { useState } from "react";

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
      setUsername("")
      setPassword("")
      setPasswordConfirmation("")
    });
    console.log(username)
    console.log(password)
    console.log(passwordConfirmation)
  }

  return (
    <div className="signUp-form-parent">
      <form onSubmit={handleSubmit}>
        <p className="sign-in-up-form-title">Please Sign Up!</p>
        <label htmlFor="username" className="sign-in-up-form-lbl">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="sign-in-up-form-input"
        />
        <label htmlFor="password" className="sign-in-up-form-lbl">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          className="sign-in-up-form-input"
        /> <br></br>
        <label htmlFor="password" className="sign-in-up-form-lbl">Pass Conf</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
          className="sign-in-up-form-input"
        /> <br></br>
        <button type="submit" className="sign-in-up-form-btn">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;

// https://github.com/amirinma/react-hooks-redux-thunk-lab/blob/solution/src/features/cats/catsSlice.js