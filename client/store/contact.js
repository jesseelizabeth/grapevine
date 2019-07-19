import axios from 'axios';

// action types
const LOADING_CONTACT = 'LOADING_CONTACT';
const GET_CONTACT = 'GET_CONTACT';
const ADD_PET = 'ADD_PET';
const ADD_RELATIONSHIP = 'ADD_RELATIONSHIP';

// action creators
const loadingContact = () => ({
  type: LOADING_CONTACT,
});

const gotContact = payload => ({
  type: GET_CONTACT,
  payload,
});

const addedPet = payload => ({
  type: ADD_PET,
  payload,
});

const addedRelationship = payload => ({
  type: ADD_RELATIONSHIP,
  payload,
});

// thunk
export const getContact = id => async dispatch => {
  dispatch(loadingContact());
  const { data } = await axios.get(`/api/contacts/${id}`);
  dispatch(gotContact(data));
};

export const addPet = (id, pet) => async dispatch => {
  try {
    const { data } = await axios.post(`/api/contacts/${id}/pets`, pet);
    dispatch(addedPet(data));
  } catch (error) {
    console.error(error);
  }
};

export const addRelationship = (id, contact) => async dispatch => {
  try {
    const { data } = await axios.post(
      `/api/contacts/${id}/relationships`,
      contact
    );
    dispatch(addedRelationship(data));
  } catch (error) {
    console.error(error);
  }
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
    case ADD_PET: {
      return {
        ...state,
        selected: {
          ...state.selected,
          pets: [...state.selected.pets, action.payload],
        },
      };
    }
    case ADD_RELATIONSHIP: {
      return {
        ...state,
        selected: {
          ...state.selected,
          relationships: [...state.selected.relationships, action.payload],
        },
      };
    }
    default:
      return state;
  }
}
