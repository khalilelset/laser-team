const GET_CATEGORYS_REQUEST = "GET_CATEGORYS_REQUEST";
const GET_CATEGORYS_SUCCESS = "GET_CATEGORYS_SUCCESS";
const GET_CATEGORYS_FAILURE = "GET_CATEGORYS_FAILURE";

const getCategorysRequest = () => ({
  type: GET_CATEGORYS_REQUEST,
});

const getCategorysSuccess = (categorys) => ({
  type: GET_CATEGORYS_SUCCESS,
  payload: categorys,
});

const getCategorysFailure = (error) => ({
  type: GET_CATEGORYS_FAILURE,
  payload: error,
});

const getCategorys = () => {
  return (dispatch) => {
    dispatch(getCategorysRequest());

    fetch("http://localhost:4000/api/get/categoryName")
      .then((response) => response.json())
      .then((data) => {
        dispatch(getCategorysSuccess(data));
      })
      .catch((error) => {
        dispatch(getCategorysFailure(error.message));
      });
  };
};

export {
  GET_CATEGORYS_REQUEST,
  GET_CATEGORYS_SUCCESS,
  GET_CATEGORYS_FAILURE,
  getCategorysRequest,
  getCategorysSuccess,
  getCategorysFailure,
  getCategorys,
};