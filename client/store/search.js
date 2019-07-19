import axios from 'axios';

// action types
const SEARCH = 'SEARCH';
const FETCHING_RESULTS = 'FETCHING_RESULTS';

// action creators
const searchResults = payload => ({
  type: SEARCH,
  payload,
});

const fetchingResults = () => ({
  type: FETCHING_RESULTS,
});

// thunk
export const searchDatabase = keyword => async dispatch => {
  dispatch(fetchingResults());
  const { data } = await axios.get(`/api/search/${keyword}`);
  dispatch(searchResults(data));
};

const initialState = {
  results: [],
  loading: false,
};

// reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_RESULTS:
      return { ...state, loading: true };
    case SEARCH:
      return { ...state, results: action.payload, loading: false };
    default:
      return state;
  }
}
