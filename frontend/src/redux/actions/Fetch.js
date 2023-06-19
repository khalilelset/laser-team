export const fetchProducts = () => {
  return (dispatch) => {
    return fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        dispatch({
          type: "FETCH_PRODUCTS_SUCCESS",
          payload: products,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_PRODUCTS_FAILURE",
          payload: error.message,
        });
      });
  };
};
