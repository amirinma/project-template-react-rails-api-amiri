
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import MainPage from "./MainPage"
import HomeLogin from './homeLogin';
import { Link } from 'react-router-dom';

function App() {

  const [user, setUser] = useState(null);

  useEffect(()=>{
    fetch("/me").then((r)=>{
      if(r.ok){
        r.json().then((user)=>setUser(user))
      }
    });
  },[]);

  // function handleLogoutClick() {
  //   fetch("/logout", { method: "DELETE" }).then((r) => {
  //     if (r.ok) {
  //       setUser(null);
  //     }
  //   });
  // }
  
  return (
    <div className="App">
      <HomeLogin user={user} setUser={setUser}/>
    </div>
  );
}

export default App;
