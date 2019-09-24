const INITIAL_STATE = {
  data: [],
  status: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_NOTES':
      console.warn(1);
      return {
        ...state,
        status: 'loading',
        data: null,
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
