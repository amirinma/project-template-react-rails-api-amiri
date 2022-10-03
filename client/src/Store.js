import {configureStore} from "@reduxjs/toolkit"
import createSlice from "./features/books/booksSlice"

const store = configureStore({
    reducer: createSlice
})

export default store