
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from "./MainPage"
import NavBar from './Navbar';
import Supplier from './Supplier';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainPage />
         
      </header>
      <Router>
            <Routes>
              <Route path="/home" element={<Supplier />}/>
            </Routes>
         </Router>
    </div>
  );
}

export default App;
