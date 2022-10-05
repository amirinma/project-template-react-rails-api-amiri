import React, { useState } from "react";
import Supplierdetail from "./supplierDetails";

function SuppliersList({supplierList = []}){
    const [supDetails, setSuppDetail] = useState('')
    const supplier = supplierList.suppliers.suppliers

    const getSupDetails = (e)=>{
            setSuppDetail(e)     
        }
    
    var newWin;
    function focusPopup(){
        if(!newWin.closed){
            newWin.focus();
        }
    }
    function addSupplier(){
        window.open('newWindow.js', 'Add Supplier', 'width=200', 'height=200');
        document.onmousedown=focusPopup;
        document.onkeyup=focusPopup;
        document.onmousemove=focusPopup;
    }
    
    return(
        <div className="sup-div">
            <div className="member-list">
                <div className="member-add-button">
                    <h6>Suppliers List</h6>
                    <button onClick={addSupplier}>Add +</button>
                </div>
                <div>
                    {supplier.map((sup)=>(
                        <h6 onClick={(e)=>{getSupDetails(e.target.textContent)}}>{sup.name}</h6>
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