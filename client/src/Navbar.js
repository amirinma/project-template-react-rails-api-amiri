import React from "react";
function Navbar(){
    return(
        <nav className="nav-bar">
            <a href="/Home" className="nav-bar-item">➡️Home</a>
            <a href="/Supplier" className="nav-bar-item">➡️Suppliers</a>
            <a href="/Vendor" className="nav-bar-item">➡️Vendors</a>
            <a href="/Customer" className="nav-bar-item">➡️Customers</a> 
        </nav>
    )
}
export default Navbar