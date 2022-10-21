
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import HomeLogin from './homeLogin';


function App() {

  const [user, setUser] = useState(null);

  useEffect(()=>{
    fetch("/me").then((r)=>{
      if(r.ok){
        r.json().then((user)=>setUser(user))
      }
    });
  },[]);

  return (
    
      
      <div className="App">
        <HomeLogin user={user} setUser={setUser}/>
      </div>
    

  );
}

export default App;
