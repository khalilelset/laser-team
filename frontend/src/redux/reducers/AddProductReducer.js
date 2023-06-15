import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
} from "../actions/AddProductAction";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const AddProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AddProductReducer;
