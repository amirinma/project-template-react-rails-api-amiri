import React from "react";
import App from "./app";
import { useSelector } from "react-redux";

function Supplierdetail({supDetails}){
    const suplist = useSelector((state)=> state.suppliers.suppliers)
  
    const suppDetails = suplist.map((sup)=>{

        if (sup.name === supDetails){
            return(
                <div>
                    <div className="member-details">
                        <div className="item-detail">
                            <div className="item-detail-name">
                                <h3>{sup.name}</h3>
                            </div>
                            <div className="item-detail-address">
                                <h4 className="item-detail-add-mem">Address:</h4>
                                <p className="item-detail-add-mem"><strong>Street:</strong> {sup.street_address}</p>
                                <p className="item-detail-add-mem"><strong>City:</strong> {sup.city}</p>
                                <p className="item-detail-add-mem"><strong>State:</strong> {sup.state}</p>
                                <p className="item-detail-add-mem"><strong>Zip Code:</strong> {sup.zip_code}</p>
                                <p className="item-detail-add-mem"><strong>Country:</strong> {sup.country}</p>
                            </div>
                        </div>
                        <div className="item-detail-contact">
                            <h4 className="item-detail-add-mem">Contact: </h4>
                            <p className="item-detail-add-mem"><strong>Phone:</strong> {sup.phone_num}</p>
                            <p className="item-detail-add-mem"><strong>Email:</strong> {sup.email_add}</p>
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
