import React from "react";
import { useSelector } from "react-redux";
import SuppliersList from "./Suppliers";

function GetSuppliers(){
    const suppliers = useSelector((state)=> state.suppliers)


    console.log("getSupplier", suppliers)

    return(
        <div>
            <h2> Get Supplier</h2>
            <SuppliersList suppliers={suppliers} />
        </div>
    )
}

export default GetSuppliers