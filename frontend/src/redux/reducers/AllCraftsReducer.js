import {
  GET_CRAFTS_REQUEST,
  GET_CRAFTS_SUCCESS,
  GET_CRAFTS_FAILURE,
} from "../actions/AllCraftsActions";

const initialState = {
  loading: false,
  crafts: [],
  error: null,
};

const craftsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CRAFTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CRAFTS_SUCCESS:
      return {
        ...state,
        loading: false,
        crafts: action.payload,
        error: null,
      };
    case GET_CRAFTS_FAILURE:
      return {
        ...state,
        loading: false,
        crafts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default craftsReducer;
