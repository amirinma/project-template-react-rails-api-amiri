import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"

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
       }
    }
})

export default supplierSlice.reducer