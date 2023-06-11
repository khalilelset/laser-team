import {
  CONTACT_FAILURE,
  CONTACT_REQUEST,
  CONTACT_SUCCESS,
} from "../actions/ContactActions";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };
    case CONTACT_FAILURE:
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

export default ContactReducer;
