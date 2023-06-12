const GET_CRAFTS_REQUEST = "GET_CRAFTS_REQUEST";
const GET_CRAFTS_SUCCESS = "GET_CRAFTS_SUCCESS";
const GET_CRAFTS_FAILURE = "GET_CRAFTS_FAILURE";

const getCraftsRequest = () => ({
  type: GET_CRAFTS_REQUEST,
});

const getCraftsSuccess = (crafts) => ({
  type: GET_CRAFTS_SUCCESS,
  payload: crafts,
});

const getCraftsFailure = (error) => ({
  type: GET_CRAFTS_FAILURE,
  payload: error,
});

const getCrafts = () => {
  return (dispatch) => {
    dispatch(getCraftsRequest());

    fetch("http://localhost:4000/api/store/craft")
      .then((response) => response.json())
      .then((data) => {
        dispatch(getCraftsSuccess(data));
      })
      .catch((error) => {
        dispatch(getCraftsFailure(error.message));
      });
  };
};

export {
  GET_CRAFTS_REQUEST,
  GET_CRAFTS_SUCCESS,
  GET_CRAFTS_FAILURE,
  getCraftsRequest,
  getCraftsSuccess,
  getCraftsFailure,
  getCrafts,
};
