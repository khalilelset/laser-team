const initialState = {
  loading: false,
  product: [],
  error: null,
};

const productByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_FETCH_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "PRODUCT_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: null,
      };
    case "PRODUCT_FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        product: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productByIdReducer;
