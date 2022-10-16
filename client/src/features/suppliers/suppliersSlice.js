import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

export const fetchSuppliers = createAsyncThunk("suppliers/fetchSuppliers", async()=>{
    const supplier = ('/suppliers')
    const resp = await fetch(supplier)
    const data = await resp.json()
    return data
} )

export const addSuppliers = createAsyncThunk("suppliers/addSuppliers", async(addNewSup)=>{
    const supplier = '/suppliers'
    const config = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(addNewSup)
    }
    const resp = await fetch(supplier, config)
    const data = await resp.json()
    return data
} )

export const removeSuppliers = createAsyncThunk("suppliers/removeSuppliers", async(removeSup)=>{
    console.log("removed", removeSup)
    const supplier = `/suppliers/${removeSup.name}`
    const config = {
        method: "DELETE", 
        headers: {
            "Content-Type": "application/json"
        },
    // body: JSON.stringify(removeSup)
    }
    // await fetch(supplier, config)
    console.log("supplier", supplier)
    console.log("config", config)
    const resp = await fetch(supplier, config)
    const data = await resp.json()
    // debugger
    return data
})

export const updateSuppliers = createAsyncThunk("suppliers/updateSuppliers", async(updateSup)=>{
    // const getSupplierId = useSelector((state)=> state.suppliers.suppliers)
    // console.log("get Sup Id", getSupplierId)
    console.log("hello", updateSup.name)
    const supplier = `/suppliers/${updateSup.name}`
    const config = {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateSup)
    }
    console.log("supplier", supplier)
    console.log("config", config)
    const resp = await fetch(supplier, config)
    const data = await resp.json()
    // debugger
    return data
})

export const enterBills = createAsyncThunk("products/addProducts", async(addNewProd)=>{
    const product = '/products'
    const config = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(addNewProd)
    }
    const resp = await fetch(product, config)
    const data = await resp.json()
    return data
} )


const supplierSlice = createSlice({
    name: "suppliers", 
    initialState: {
        suppliers: [],
        status: "idle",
    },
    reducers: {
        supplierAdded(state, action){
            console.log("supplier hoho")
        }

    }, 
    extraReducers: {
       [fetchSuppliers.fulfilled](state, action) {
        state.suppliers = action.payload;
        state.status = "idle"
       }, 
       [fetchSuppliers.pending](state, action) {
        state.status = "pending"
       }, 
       [fetchSuppliers.pending](state, action) {
        state.status = "idle"
       },
       [addSuppliers.fulfilled](state, action){
        state.suppliers.push(action.payload)
        state.status = "idle"
       },
       [removeSuppliers.fulfilled](state,action){
        
        state.suppliers=state.suppliers.filter((sup)=>{
            return sup.id !== action.payload.id
        })
        state.status = "idle"
       },
       [updateSuppliers.fulfilled](state,action){
        // state.suppliers = action.payload;
        state.suppliers = state.suppliers.map((sup)=> {
            return sup.name
        })
        state.status = "idle"
       }
    }
})

export default supplierSlice.reducer