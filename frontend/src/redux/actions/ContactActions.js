const CONTACT_REQUEST = "CONTACT_REQUEST";
const CONTACT_SUCCESS = "CONTACT_SUCCESS";
const CONTACT_FAILURE = "CONTACT_FAILURE";

const submitContactForm = (formData) => {
  return async (dispatch) => {
    dispatch({ type: CONTACT_REQUEST });
    try {
      fetch("http://localhost:4000/api/contact/add", {
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
            dispatch({ type: CONTACT_FAILURE, payload: data.error });
          } else {
            // If the request was successful
            dispatch({ type: CONTACT_SUCCESS });
          }
        });
    } catch (error) {
      dispatch({
        type: CONTACT_FAILURE,
        payload: error.message,
      });
    }
  };
};

export { CONTACT_REQUEST, CONTACT_SUCCESS, CONTACT_FAILURE, submitContactForm };
