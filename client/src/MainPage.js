import React from "react";
import Supplier from "./Supplier"
import NavBar from "./Navbar";
function Main(){
    return (
        <div className="main-div">
            <div className="main-div-sub"><NavBar /></div>
            <div className="main-div-sub"><Supplier /></div>
            <div className="main-div-sub"><Supplier /></div>
        </div>
    )
}

export default Main