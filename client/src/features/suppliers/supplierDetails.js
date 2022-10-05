import React from "react";
import { useSelector } from "react-redux";

function Supplierdetail({supDetails}){
    const suplist = useSelector((state)=> state.suppliers.suppliers)

    console.log("Supplier Update Arrow",supDetails)
    console.log("splist console", suplist)
    
    const suppDetails = suplist.map((sup)=>{
        console.log("determined",sup)

        if (sup.name === supDetails){
            return(
                <div className="member-details">
                    <div className="item-detail">
                        <div>
                            <h6>{sup.name}</h6>
                            <select name="Action">
                                <option>Slect an action</option>
                                <option>Enter Bill</option>
                                <option>Create Report</option>
                            </select>
                        </div>
                        <div></div>
                    </div>
                    <div className="item-detail"></div>
                </div>
            )
        } 
    })
    
    return(
        <div>
            {suppDetails}
        </div>
    )
}

export default Supplierdetail
