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
  try {
    const { data } = await axios.get('/api/contacts');
    dispatch(gotContacts(data));
  } catch (error) {
    console.log(error);
  }
};

export const addContact = contact => async dispatch => {
  try {
    const { data } = await axios.post('/api/contacts', contact);
    dispatch(addedContact(data));
  } catch (error) {
    console.log(error);
  }
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
