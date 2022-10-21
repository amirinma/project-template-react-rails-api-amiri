import React, { useEffect, useState } from "react";
// import Supplier from "./Supplier";
import Navbar from "./Navbar";
import Login from "./Login";
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom'
import Customer from "./Customer";
import SignUp from "./SignUp";
import GetSuppliers from './features/suppliers/GetSupplier'
import Home from "./home";
import DisplayProducts from "./features/products/products";

function Main({user, setUser}){
    const supplier = '/suppliers'
    const [supplierFo, setSupplierFo] = useState([])

    useEffect(()=>{
        fetch(supplier)
        .then((r)=>r.json())
        .then((supply)=> setSupplierFo(supply))
    },[])

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    return (
        <div className="main-page-div">
            <div className="logout-element">
                <p className="company-head-name">CyberDefend Technolgy</p>
                <button className="logout-element-btn" onClick={handleLogoutClick}>Logout</button>
            </div>
            
            <div className="main-div">
                <div className="main-div-sub"><Navbar /></div>
                
                <Router>
                    <Routes>
                        <Route path="/home" element={<Home />}/>
                        <Route path="/Supplier" element={<GetSuppliers />} />
                        <Route path="/Customer" element={<Customer />}/>
                        <Route path="/product" element={<DisplayProducts/>} />
                    </Routes>
                </Router>
            </div>
        </div>
    )
}

export default Main

