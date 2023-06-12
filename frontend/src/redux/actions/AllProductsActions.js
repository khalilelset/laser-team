const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

const getProductsRequest = () => ({
  type: GET_PRODUCTS_REQUEST,
});

const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getProductsFailure = (error) => ({
  type: GET_PRODUCTS_FAILURE,
  payload: error,
});

const getProducts = () => {
  return (dispatch) => {
    dispatch(getProductsRequest());

    fetch("http://localhost:4000/api/store/product")
      .then((response) => response.json())
      .then((data) => {
        dispatch(getProductsSuccess(data));
      })
      .catch((error) => {
        dispatch(getProductsFailure(error.message));
      });
  };
};

export {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
  getProducts,
};
