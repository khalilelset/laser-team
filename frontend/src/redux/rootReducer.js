import { combineReducers } from "redux";
import ContactReducer from "./reducers/ContactReducer";
import productReducer from "./reducers/AllProductsReducer";

const rootReducer = combineReducers({
  contact: ContactReducer,
  products: productReducer,
});

export default rootReducer;
