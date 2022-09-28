
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from "./MainPage"
import Supplier from './Supplier';
import Customer from './Customer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainPage />
         
      </header>
     
    </div>
  );
}

export default App;
