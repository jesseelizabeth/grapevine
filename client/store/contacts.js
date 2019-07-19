import axios from 'axios';

// action types
const LOADING_CONTACTS = 'LOADING_CONTACTS';
const GET_CONTACTS = 'GET_CONTACTS';
const ADD_CONTACT = 'ADD_CONTACT';

// action creators
const loadingContacts = () => ({
  type: LOADING_CONTACTS,
});

const gotContacts = payload => ({
  type: GET_CONTACTS,
  payload,
});

const addedContact = payload => ({
  type: ADD_CONTACT,
  payload,
});

// thunk
export const getContacts = () => async dispatch => {
  dispatch(loadingContacts());
  const { data } = await axios.get('/api/contacts');
  dispatch(gotContacts(data));
};

export const addContact = contact => async dispatch => {
  const { data } = await axios.post('/api/contacts', contact);
  dispatch(addedContact(data));
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
    case ADD_CONTACT:
      return { ...state, all: [...state.all, action.payload] };
    default:
      return state;
  }
}
