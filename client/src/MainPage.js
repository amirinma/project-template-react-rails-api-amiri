import React, { useEffect, useState } from "react";
import Supplier from "./Supplier";
import Navbar from "./Navbar";
import Login from "./Login";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Customer from "./Customer";
import SignUp from "./SignUp";

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
            

            {/* <SignUp />
            <Login /> */}
        <div className="main-div">
            <div className="main-div-sub"><Navbar /></div>
            <Router>
            <Routes>
                <Route path="/home" element={<Login />}/>
                <Route path="/Supplier" element={<Supplier supplierFo = {supplierFo} />}/>
                <Route path="/Customer" element={<Customer />}/>

            </Routes>
        </Router>
        </div>
        

        </div>
    )
}

export default Main

// import React, { useEffect, useState } from "react";
// import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SignUp from "./SignUp";
// import Login from "./Login";
// import NavBar from "./NavBar";
// import HomePage from "./Homepage";

// function Main(){
//     const [user, setUser] = useState(null);

//   useEffect(() => {
//     // auto-login
//     fetch("/me").then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));
//       }
//     });
//   }, []);
//     return(
//         <div>
//             <NavBar />
//         </div>
//     )
// }

// export default Main;