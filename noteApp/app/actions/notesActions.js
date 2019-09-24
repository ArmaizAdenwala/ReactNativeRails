import * as types from '../actionTypes/notes';

export function fetchNotes() {
  return dispatch => {
    dispatch({
      type: types.FETCH_NOTES,
    });
  };
}
