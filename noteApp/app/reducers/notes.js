const INITIAL_STATE = {
  data: [],
  status: null,
  error: null,
  createStatus: null,
  createError: null,
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

    case 'CREATE_NOTE':
      return {
        ...state,
        createStatus: 'loading',
        createError: null,
      };

    case 'CREATE_NOTE_SUCCESS':
      return {
        ...state,
        createStatus: 'success',
        data: [...state.data, action.data],
        createError: null,
      };

    case 'CREATE_NOTE_FAILURE':
      return {
        ...state,
        createStatus: 'failure',
        createError: action.error,
      };

    default:
      return state;
  }
};
