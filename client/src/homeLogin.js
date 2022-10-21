import MainPage from "./MainPage"
import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function HomeLogin({user}){
  const [display, setDisplay] =useState('')

  function hundleDisplay(e){
    setDisplay(e.target.name)
  }
    if (user) {
      return <div className="main-page-div-parent" >{<MainPage />}!</div>;
    } else {
      return (
        <div className="sign-in-up">
          <div className="sign-in-up-btn-parent">
            {/* <button name="signUp" className="sign-in-up-btn" onClick={hundleDisplay}>SignUp</button>
            <button name="signIn" className="sign-in-up-btn" onClick={hundleDisplay}>SignIn</button> */}
            <a href="/signup" className="nav-bar-item">SignUp</a>
            <a href="/login" className="nav-bar-item">SignIn</a>
          </div>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              
            </Routes>
          </BrowserRouter>
          {/* <div>
            {display === "signUp" ? <SignUp /> : null}
            {display === "signIn" ? <Login /> : null}
            {display === "" ? <Login /> : null}
          </div> */}
            {/* <div className="sign-up">{<SignUp />}</div>
            <div className="sign-in">{<Login />}</div> */}
        </div>
      );
    }
  }

export default HomeLogin
