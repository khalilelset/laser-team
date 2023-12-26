const REGISTER_REQUEST = "REGISTER_REQUEST";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAILURE = "REGISTER_FAILURE";

const loginaction = (formData) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      fetch("http://localhost:4000/api/client/login", {
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
            dispatch({ type: REGISTER_FAILURE, payload: data.error });
          } else {
            localStorage.setItem("email", JSON.stringify(formData.email));
            localStorage.setItem("status", "client");
            // If the request was successful
            dispatch({ type: REGISTER_SUCCESS });
          }
        });
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: error.message,
      });
    }
  };
};

export { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, loginaction };
