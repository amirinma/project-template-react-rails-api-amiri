import { combineReducers } from "redux";
import authorsReducer from "./features/customers/customersSlice";
import booksReducer from "./features/books/booksSlice";
import supplierReducer from "./features/suppliers/suppliersSlice";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer,
  suppliers: supplierReducer,
});
export default rootReducer;