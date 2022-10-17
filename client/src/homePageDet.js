import React, { useState } from "react";
import AddSupp from "./features/suppliers/addSupForm";
import EnterBill from "./features/suppliers/enterBill";
import UpdateSupp from "./features/suppliers/updateSupplier";

function HomePageDet(){
    const [display, setDisplay]=useState("")

    function addSupplierForm(e){
        setDisplay(e.target.name)
        
    }


    return(
        <div className="home-page-elements">
            <nav>
                <button name="addSup" className="hom-nav-bar" onClick={addSupplierForm}>Add Supplier</button>
                <button name="updateSup" className="hom-nav-bar" onClick={addSupplierForm}>Update Supplier</button>
                <button  name="entBill" className="hom-nav-bar" onClick={addSupplierForm}>Enter Bill</button>
                <button  className="hom-nav-bar">Add Customer</button>
                <button  className="hom-nav-bar">Enter Invoice</button>
            </nav>
            <div>
                {display === "addSup" ? <h1>{<AddSupp />}</h1>: null}
                {display === "updateSup" ? <h1>{<UpdateSupp />}</h1>: null}
                {display === "entBill" ? <h1>{<EnterBill />}</h1>: null}
            </div>
        </div>
    )
}

export default HomePageDet