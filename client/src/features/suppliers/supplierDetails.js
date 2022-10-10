import React from "react";
import { useSelector } from "react-redux";

function Supplierdetail({supDetails}){
    const suplist = useSelector((state)=> state.suppliers.suppliers)
    // const prodlist = suplist.map()
    

    console.log("Supplier Update Arrow",supDetails)
    console.log("splist console", suplist)
   
    
    const suppDetails = suplist.map((sup)=>{

        if (sup.name === supDetails){
            return(
                <div>
                    <div className="member-details">
                        <div className="item-detail">
                            <div className="item-detail-name">
                                <h3>{sup.name}</h3>
                                {/* <select name="Action">
                                    <option>Slect an action</option>
                                    <option>Enter Bill</option>
                                    <option>Create Report</option>
                                </select> */}
                            </div>
                            <div className="item-detail-address">
                                <h6>Address:</h6>
                                <p>Street: {sup.street_address}</p>
                                <p>City: {sup.city}</p>
                                <p>State: {sup.state}</p>
                                <p>Zip Code: {sup.zip_code}</p>
                                <p>Country: {sup.country}</p>
                            </div>
                        </div>
                        <div className="item-detail-contact">
                            <h6>Contact: </h6>
                            <p>Phone: {sup.phone_num}</p>
                            <p>Email: {sup.email_add}</p>
                        </div>
                    </div>
                    <div>
                        <table className="pro-table">
                            <div className="pro-table-div">
                                <th className="pro-date">DATE</th>
                                <th className="pro-bill">BILL#</th>
                                <th className="pro-name">PRODUCT NAME</th>
                                <th className="pro-quantity">QUANTITY</th>
                                <th className="pro-price">PRICE</th>
                                <th className="pro-total">TOTAL</th>
                            </div>
                            {sup.products.map((pro)=>{
                                return(
                                    <div className="pro-table-div">
                                        <tr>
                                            <td className="pro-date">{pro.date}</td>
                                            <td className="pro-bill">{pro.bill_num}</td>
                                            <td className="pro-name">{pro.name}</td>
                                            <td className="pro-quantity">{pro.quantity}</td>
                                            <td className="pro-price">$ {pro.price}</td>
                                            <td className="pro-total">$ {pro.total}</td>
                                        </tr>
                                    </div>
                                )
                            })}
                        </table>
                    </div>
                </div>
            
            )
        } 
    })
    
    return(
        <div className="parent-member-details">
            <div>{suppDetails}</div> 
        </div>
    )
}

export default Supplierdetail
