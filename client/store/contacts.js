import axios from 'axios';

// action types
const LOADING_CONTACTS = 'LOADING_CONTACTS';
const GET_CONTACTS = 'GET_CONTACTS';

// action creators
const loadingContacts = () => ({
  type: LOADING_CONTACTS,
});

const contacts = payload => ({
  type: GET_CONTACTS,
  payload,
});

// thunk
export const getContacts = () => async dispatch => {
  dispatch(loadingContacts());
  const { data } = await axios.get('/api/contacts');
  dispatch(contacts(data));
};

const initialState = {
  all: [],
  loading: false,
};

// reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_CONTACTS:
      return { ...state, loading: true };
    case GET_CONTACTS:
      return { ...state, all: action.payload, loading: false };
    default:
      return state;
  }
}
