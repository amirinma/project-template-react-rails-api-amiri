import MainPage from "./MainPage"
import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";
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
            <button name="signUp" className="sign-in-up-btn" onClick={hundleDisplay}>SignUp</button>
            <button name="signIn" className="sign-in-up-btn" onClick={hundleDisplay}>SignIn</button>
          </div>
          <div>
            {display === "signUp" ? <SignUp /> : null}
            {display === "signIn" ? <Login /> : null}
            {display === "" ? <Login /> : null}
          </div>
            {/* <div className="sign-up">{<SignUp />}</div>
            <div className="sign-in">{<Login />}</div> */}
        </div>
      );
    }
  }

export default HomeLogin
