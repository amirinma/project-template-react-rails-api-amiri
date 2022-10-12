import MainPage from "./MainPage"
import Login from "./Login";
import SignUp from "./SignUp";
function HomeLogin({user}){
    if (user) {
      return <div className="main-page-div-parent" >{<MainPage />}!</div>;
    } else {
      return (
        <div className="sign-in-up">
            <div className="sign-up">{<SignUp />}</div>
            <div className="sign-in">{<Login />}</div>
        </div>
      );
    }
  }

export default HomeLogin