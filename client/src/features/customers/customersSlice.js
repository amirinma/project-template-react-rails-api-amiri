import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const fetchCustomers = createAsyncThunk("customers/fetchCustomers", async()=>{
    const supplier = ('/customers')
    const resp = await fetch(supplier)
    const data = await resp.json()
    return data
} )

export const addCustomers = createAsyncThunk("customers/addCustomers", async(addNewSup)=>{
    const supplier = '/customers'
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

export const enterInvoice = createAsyncThunk("products/addProducts", async(addNewProd)=>{
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

export const removeCustomer = createAsyncThunk("customers/removeCustomers")


const customerSlice = createSlice({
    name: "customers", 
    initialState: {
        customers: [],
        status: "idle",
    },
    reducers: {
        supplierAdded(state, action){
            console.log("supplier hoho")
        }

    }, 
    extraReducers: {
       [fetchCustomers.fulfilled](state, action) {
        state.customers = action.payload;
        state.status = "idle"
       }, 
       [fetchCustomers.pending](state, action) {
        state.status = "pending"
       }, 
       [fetchCustomers.pending](state, action) {
        state.status = "idle"
       },
       [addSuppliers.fulfilled](state, action){
        state.customers.push(action.payload)
        state.status = "idle"
       }
    }
})

export default customerSlice.reducer