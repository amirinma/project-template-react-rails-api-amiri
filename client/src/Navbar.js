import React from "react";
function Navbar(){
    return(
        <nav className="nav-bar">
            <a href="/Home" className="nav-bar-item">Home <br></br>&#127968;</a>
            <a href="/Supplier" className="nav-bar-item">Suppliers <br></br>🏭</a>
            <a href="/Customer" className="nav-bar-item">Customers</a> 
        </nav>
    )
}
export default Navbar