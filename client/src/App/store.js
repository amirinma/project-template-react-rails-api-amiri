import {configureStore} from '@reduxjs/toolkit'
import suppliersSlice from '../features/suppliers/suppliersSlice'
const store = configureStore({
    reducer: {
        suppliers: suppliersSlice
    }
})

export default store