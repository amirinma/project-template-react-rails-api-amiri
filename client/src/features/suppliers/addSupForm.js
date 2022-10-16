import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSuppliers } from "./suppliersSlice";


function AddSupp(e){
    const [newSup, setNewSup]=useState('')
    const [newSupCountry, setNewSupCountry] = useState('')
    const addSupplier = useSelector((state)=> state.suppliers.suppliers)
    const dispatch = useDispatch()
    function hundleSubmit(event){
        event.preventDefault()
        const addNewSup = {
            name: newSup,
            county: newSupCountry
        }
        
        dispatch(addSuppliers(addNewSup))
    }
    console.log("add sup", addSupplier)

    return(
        <div>
        <form onSubmit={hundleSubmit}>
            <p>Please Add Supplier Details Bellow:</p>
            <label>Supplier Name</label>
            <input type="text" value={newSup} onChange={(e)=> setNewSup(e.target.value)}/>
            <label>County</label>
            <input type="text" value={newSupCountry} onChange={(e)=> setNewSupCountry(e.target.value)}/>
            <input type="submit"/>
        </form>
    </div>
    )
}

export default AddSupp