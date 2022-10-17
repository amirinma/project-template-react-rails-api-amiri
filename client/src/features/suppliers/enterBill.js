import React, { useState, useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import {enterBills} from "./suppliersSlice"
import {fetchSuppliers} from "./suppliersSlice"
function EnterBill(){

    const [billNumber, setBillNumber]=useState('')
    const [productName, setProductName]=useState('')
    const [quantity, setQuantity]=useState('')
    const [price, setPrice]=useState('')
    const [total, setTotal]=useState('')
    const [supplierName, setSupplierName]=useState('')
    const [billDate, setBillDate]=useState('')
    const [proCategory, setProCategory]=useState('')
    const supplierList = useSelector((state)=> state)

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
            date: billDate,
            pro_category: proCategory
        }
        
        dispatch(enterBills(addNewSup))
        setBillNumber('');
        setProductName('');
        setQuantity('');
        setPrice('');
        setTotal('');
        setSupplierName('');
        setBillDate('');
        setProCategory('');
    }
    useEffect(()=>{
        dispatch(fetchSuppliers());
    }, [dispatch])
    const updatedList = supplierList.suppliers.suppliers
    console.log("category", proCategory)
    return(
        <div className="enter-bill-form-parent">
            <form onSubmit={hundleSubmit} id="enter-bill-form">
                <p className="form-details-title">Please Enter Purchase Invoice Information Bellow:</p>
                <label>Supplier Name</label>
                <input type="text" value = {supplierName} onChange = {(e)=> setSupplierName(e.target.value)} />
                <label>Date</label>
                <input type="date" value={billDate} onChange={(e)=>setBillDate(e.target.value)}/>
                <label>Bill Num:</label>
                <input type="text" value={billNumber} onChange={(e)=> setBillNumber(e.target.value)}/>
                <label>Product Category</label>
                <select value={proCategory} onChange={(e)=>setProCategory(e.target.value)}>
                    <option>AntiVirus</option>
                    <option>InternetSec</option>
                    <option>TotalSec</option>
                </select>
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