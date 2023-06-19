import { combineReducers } from "redux";
import ContactReducer from "./reducers/ContactReducer";
import productReducer from "./reducers/AllProductsReducer";
import SignUpReducer from "./reducers/SignUpReducer";
import craftsReducer from "./reducers/AllCraftsReducer";
import SignUpCOReducer from "./reducers/SignUpCOReducer";
import LoginReducer from "./reducers/LoginReducer";
import LoginCOReducer from "./reducers/LoginCOReducer";
import AddProductReducer from "./reducers/AddProductReducer";
<<<<<<< HEAD
import categoryReducer from "./reducers/AllCaregorysReducer";


=======
import productByIdReducer from "./reducers/ProductByIdReducer";
>>>>>>> 6b4de6733d1e2388432b3fa9405113eb3f881d1a

const rootReducer = combineReducers({
  contact: ContactReducer,
  products: productReducer,
  signup: SignUpReducer,
  signcpco: SignUpCOReducer,
  crafts: craftsReducer,
  login: LoginReducer,
  loginco: LoginCOReducer,
  addProduct: AddProductReducer,
<<<<<<< HEAD
  categorys: categoryReducer,

=======
  product: productByIdReducer,
>>>>>>> 6b4de6733d1e2388432b3fa9405113eb3f881d1a
});

export default rootReducer;
