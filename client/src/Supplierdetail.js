import React from "react";

function Supplierdetail({suppDetail, supplierFo}){
    console.log("hah", suppDetail)
    console.log('heheh', supplierFo)

    const suppDet = ()=>{
    const selectSup = supplierFo.filter((sup)=>sup.name!==suppDetail)
    console.log("bow",selectSup)
        
    }

console.log(suppDet)


    return(
        <div>
            <div>
                <h1>Suppliers Detail</h1>
                <button>+</button>
            </div>
            <div>
                <h6>Supplier Sample</h6>
            </div>
        </div>
    )
}

export default Supplierdetail