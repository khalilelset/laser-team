import {
    GET_CATEGORYS_REQUEST,
    GET_CATEGORYS_SUCCESS,
    GET_CATEGORYS_FAILURE,
  } from "../actions/AllCategorysAction";
  
  const initialState = {
    loading: false,
    categorys: [],
    error: null,
  };
  
  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CATEGORYS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_CATEGORYS_SUCCESS:
        return {
          ...state,
          loading: false,
          categorys: action.payload,
          error: null,
        };
      case GET_CATEGORYS_FAILURE:
        return {
          ...state,
          loading: false,
          categorys: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default categoryReducer;
  
