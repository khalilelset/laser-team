import { combineReducers } from "redux";
import ContactReducer from "./reducers/ContactReducer";
import productReducer from "./reducers/AllProductsReducer";
import SignUpReducer from "./reducers/SignUpReducer";
import craftsReducer from "./reducers/AllCraftsReducer";
import SignUpCOReducer from "./reducers/SignUpCOReducer";
import LoginReducer from "./reducers/LoginReducer";
import LoginCOReducer from "./reducers/LoginCOReducer";
import AddProductReducer from "./reducers/AddProductReducer";
import categoryReducer from "./reducers/AllCaregorysReducer";



const rootReducer = combineReducers({
  contact: ContactReducer,
  products: productReducer,
  signup: SignUpReducer,
  signcpco: SignUpCOReducer,
  crafts: craftsReducer,
  login: LoginReducer,
  loginco: LoginCOReducer,
  addProduct: AddProductReducer,
  categorys: categoryReducer,

});

export default rootReducer;
