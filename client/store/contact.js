import axios from 'axios';

// action types
const LOADING_CONTACT = 'LOADING_CONTACT';
const GET_CONTACT = 'GET_CONTACT';

// action creators
const loadingContact = () => ({
  type: LOADING_CONTACT,
});

const contact = payload => ({
  type: GET_CONTACT,
  payload,
});

// thunk
export const getContact = id => async dispatch => {
  dispatch(loadingContact());
  const { data } = await axios.get(`/api/contacts/${id}`);
  dispatch(contact(data));
};

const initialState = {
  selected: {},
  loading: false,
};

// reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_CONTACT:
      return { ...state, loading: true };
    case GET_CONTACT:
      return { ...state, selected: action.payload, loading: false };
    default:
      return state;
  }
}
