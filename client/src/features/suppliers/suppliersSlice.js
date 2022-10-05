import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const fetchSuppliers = createAsyncThunk("suppliers/fetchSuppliers", async()=>{
    const supplier = ('/suppliers')
    const resp = await fetch(supplier)
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

    }, 
    extraReducers: {
       [fetchSuppliers.fulfilled](state, action) {
        state.suppliers = action.payload;
        state.status = "idle"
       }
    }
})

export default supplierSlice.reducer