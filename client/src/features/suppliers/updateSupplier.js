import { React, useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSuppliers } from "./suppliersSlice";
import {fetchSuppliers} from "./suppliersSlice"


function UpdateSupp(e){
    const [newSup, setNewSup]=useState('')
    const [newSupCountry, setNewSupCountry] = useState('')
    const dispatch = useDispatch()
    const updateSup = useSelector((state)=> state.suppliers.suppliers)
    console.log("Update S",updateSup)
    
    function hundleSubmit(event){
        event.preventDefault()
        const updateSuppli = {
            name: newSup,
            country: newSupCountry
        }
        
        dispatch(updateSuppliers(updateSuppli))
        console.log("updateSuppli", updateSuppli)
        setNewSupCountry('');
    }

    useEffect(()=>{
        dispatch(fetchSuppliers());
    }, [dispatch])
    
    console.log("after Sup", newSup)

    return(
        <div>
        <form onSubmit={hundleSubmit}>
            <p className="form-details-title">Please Update Supplier's Information Bellow:</p>
            <label>Supplier Name</label>
            <select value={newSup} onChange={(e) => setNewSup(e.target.value)} >
                <option>Please Select Supplier</option>
                {updateSup.map((sup)=>(
                    <option >{sup.name}</option>
                ))}
            </select>
            <label>County</label>
            <input type="text" value={newSupCountry} onChange={(e)=> setNewSupCountry(e.target.value)}/>
            <input type="submit"/>
        </form>
    </div>
    )
}

export default UpdateSupp
