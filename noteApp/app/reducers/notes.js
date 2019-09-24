const INITIAL_STATE = {
  data: [],
  status: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_NOTES':
      return {
        ...state,
        status: 'loading',
        error: null,
      };

    case 'FETCH_NOTES_SUCCESS':
      return {
        ...state,
        status: 'success',
        data: action.data,
        error: null,
      };

    case 'FETCH_NOTES_FAILURE':
      return {
        ...state,
        status: 'failure',
        error: action.error,
      };

    default:
      return state;
  }
};
