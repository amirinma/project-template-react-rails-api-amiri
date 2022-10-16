import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Supplierdetail from "./supplierDetails";
import {removeSuppliers} from "./suppliersSlice"

function SuppliersList({supplierList = []}){
    const [supDetails, setSuppDetail] = useState('')
    const supplier = supplierList.suppliers.suppliers
    const dispatch = useDispatch()

    const getSupDetails = (e)=>{
            setSuppDetail(e)     
        }
    function removeSup(e){
        dispatch(removeSuppliers(e))
    }
   
    return(
        <div className="sup-div">
            <div className="member-list">
                <div className="member-add-button">
                    <p className="member-heading">SUPPLIERS</p>
                </div>
                <div>
                    {supplier.map((sup)=>(
                        <div className="member-remove-button">
                            <button onClick={(e)=>removeSup(sup.id)}>x</button>
                            <p onClick={(e)=>{getSupDetails(e.target.textContent)}} className="item-pointer">{sup.name}</p>
                            <p>$ {sup.sup_balance}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Supplierdetail supDetails = {supDetails}/>
        </div>
    )
console.log('after return', getSupDetails)
}

export default SuppliersList

// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Supplierdetail from "./Supplierdetail";

// function Supplier({supplierFo}){

//     const details = useSelector(state => state)
//     console.log("redux", details)

//     const [suppDetail, setSuppDetail]=useState([])
//     function getDetails(e){
//         setSuppDetail(e)

//     }