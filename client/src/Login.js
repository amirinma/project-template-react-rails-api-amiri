import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const er = []
    const navigate = useNavigate()
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
          navigate("/home")
        } else{
          r.json().then((data)=>{
            if(data.error){
              setErrors([...data.error])
            }else{
              setUser(data)
            }
          })
        }
      });
      setUsername("")
      setPassword("")
      setTimeout(()=>{setErrors([])}, 3000)
    }
           
    console.log("errorst",errors)
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
          <p className="error-msg">{errors}</p>
        </form>
      </div>
    );
  }

export default Login