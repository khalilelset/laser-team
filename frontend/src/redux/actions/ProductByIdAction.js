export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_FETCH_REQUEST" });

    const response = await fetch(
      `http://localhost:4000/api/store/product/getOne/${id}`
    );
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "PRODUCT_FETCH_SUCCESS", payload: data });
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    dispatch({ type: "PRODUCT_FETCH_FAILURE", payload: error.message });
  }
};
