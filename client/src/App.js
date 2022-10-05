
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from "./MainPage"
// import Supplier from './Supplier';
// import Customer from './Customer';
// import Controls from './features/books/BookInput';
// import Book from './features/books/Books';

import { useEffect } from 'react';

function App() {
  // useEffect(getSuppliers)
  return (
    <div className="App">
      <header className="App-header">
        
        <MainPage />
         
      </header>
     
    </div>
  );
}

export default App;
