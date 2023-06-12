import { combineReducers } from "redux";
import ContactReducer from "./reducers/ContactReducer";
import productReducer from "./reducers/AllProductsReducer";
import SignUpReducer from "./reducers/SignUpReducer";
import craftsReducer from "./reducers/AllCraftsReducer";
import SignUpCOReducer from "./reducers/SignUpCOReducer";
const rootReducer = combineReducers({
  contact: ContactReducer,
  products: productReducer,
  signup: SignUpReducer,
  signcpco: SignUpCOReducer,
  crafts: craftsReducer,
});

export default rootReducer;
