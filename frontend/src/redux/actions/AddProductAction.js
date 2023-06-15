const ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST";
const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";

const submitProductForm = (formData) => {
  return async (dispatch) => {
    dispatch({ type: ADD_PRODUCT_REQUEST });
    try {
      fetch("http://localhost:4000/api/post/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            // If there is an error in the response
            dispatch({ type: ADD_PRODUCT_FAILURE, payload: data.error });
          } else {
            // If the request was successful
            dispatch({ type: ADD_PRODUCT_SUCCESS });
          }
        });
    } catch (error) {
      dispatch({
        type: ADD_PRODUCT_FAILURE,
        payload: error.message,
      });
    }
  };
};

export {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  submitProductForm,
};
