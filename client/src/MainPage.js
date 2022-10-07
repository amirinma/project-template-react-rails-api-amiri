import React, { useEffect, useState } from "react";
// import Supplier from "./Supplier";
import Navbar from "./Navbar";
import Login from "./Login";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Customer from "./Customer";
import SignUp from "./SignUp";
import GetSuppliers from './features/suppliers/GetSupplier'
import Home from "./home";

function Main(){
    const supplier = '/suppliers'
    const [supplierFo, setSupplierFo] = useState([])



    useEffect(()=>{
        fetch(supplier)
        .then((r)=>r.json())
        .then((supply)=> setSupplierFo(supply))
    },[])
console.log("inside main",supplierFo)




    return (
        <div className="main-page-div">
            <div><SignUp /></div>
            <div><Login /></div>
        <div>Hello</div>
        <div className="main-div">
            <div className="main-div-sub"><Navbar /></div>
            
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/Supplier" element={<GetSuppliers />} />
                    <Route path="/Customer" element={<Customer />}/>
                    {/* <Route path="" */}
                </Routes>
            </Router>
        </div>
        </div>
    )
}

export default Main

