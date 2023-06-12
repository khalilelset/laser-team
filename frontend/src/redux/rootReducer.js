import { combineReducers } from "redux";
import ContactReducer from "./reducers/ContactReducer";
import productReducer from "./reducers/AllProductsReducer";
import SignUpReducer from "./reducers/SignUpReducer";
const rootReducer = combineReducers({
  contact: ContactReducer,
  products: productReducer,
  signup: SignUpReducer,
});

export default rootReducer;
