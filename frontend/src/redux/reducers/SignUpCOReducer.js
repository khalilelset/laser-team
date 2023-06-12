import {
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
  } from "../actions/SignUpCOAction";
  
  const initialState = {
    loading: false,
    success: false,
    error: null,
  };
  
  const SignUpCOReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          error: null,
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          error: null,
        };
      case REGISTER_FAILURE:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default SignUpCOReducer;
  