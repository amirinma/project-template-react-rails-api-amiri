import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {enterBills} from "./suppliersSlice"
function EnterBill(){

    const [billNumber, setBillNumber]=useState('')
    const [productName, setProductName]=useState('')
    const [quantity, setQuantity]=useState('')
    const [price, setPrice]=useState('')
    const [total, setTotal]=useState('')
    const [supplierName, setSupplierName]=useState('')
    const [billDate, setBillDate]=useState('')

    const dispatch = useDispatch()
    function hundleSubmit(event){
        event.preventDefault()
        const addNewSup = {
            name: productName,
            quantity: quantity,
            price: price,
            total: total,
            supplier: supplierName,
            bill_num: billNumber,
            date: billDate
        }
        
        dispatch(enterBills(addNewSup))
    }
    return(
        <div>
            <form onSubmit={hundleSubmit}>
                <label>Supplier Name</label>
                <input type="text" value = {supplierName} onChange = {(e)=> setSupplierName(e.target.value)} />
                <label>Date</label>
                <input type="date" value={billDate} onChange={(e)=>setBillDate(e.target.value)}/>
                <label>Bill Num:</label>
                <input type="text" value={billNumber} onChange={(e)=> setBillNumber(e.target.value)}/>
                <label>Produc</label>
                <input type="text"value={productName} onChange={(e)=> setProductName(e.target.value)}/>
                <label>Quantity</label>
                <input type="text"value={quantity} onChange={(e)=> setQuantity(e.target.value)}/>
                <label>Price</label>
                <input type="text"value={price} onChange={(e)=> setPrice(e.target.value)}/>
                <label>Total</label>
                <input type="text"value={total} onChange={(e)=> setTotal(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default EnterBill