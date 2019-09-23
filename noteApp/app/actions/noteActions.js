import * as types from '../actionTypes/note';

export function fetchNotes() {
  return dispatch => {
    dispatch({
      type: types.FETCH_NOTES,
    });
  };
}
