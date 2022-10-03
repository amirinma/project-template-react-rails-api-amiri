
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from "./MainPage"
// import Supplier from './Supplier';
// import Customer from './Customer';
import Controls from './features/books/BookInput';
import Book from './features/books/Books';
import GetSuppliers from './features/suppliers/GetSupplier';

function App() {
  console.log(Controls)
  return (
    <div className="App">
      <header className="App-header">
        <Controls />
        <Book />
        <GetSuppliers />
        <MainPage />
         
      </header>
     
    </div>
  );
}

export default App;
