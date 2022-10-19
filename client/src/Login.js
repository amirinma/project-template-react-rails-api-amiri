import React, {useState} from "react";

function Login({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }
                                                  
    return (
      <div className="login-form-parent">
        <form onSubmit={handleSubmit} className="login-form">
          <p className="sign-in-up-form-title">Please Enter Username and Password</p>
          <label htmlFor="username" className="sign-in-up-form-lbl">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="sign-in-up-form-input"
          />
          <label htmlFor="password" className="sign-in-up-form">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="sign-in-up-form-input"
          /> <br></br>
          <button type="submit" className="sign-in-up-form-btn">Login</button>
        </form>
      </div>
    );
  }

export default Login