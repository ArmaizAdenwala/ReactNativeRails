import * as types from '../actionTypes/notes';

export function fetchNotes() {
  return async dispatch => {
    dispatch({type: types.FETCH_NOTES});
    try {
      let notes = await fetch('http://localhost:5000/notes');
      if (notes.status !== 200) {
        throw new Error('FETCH_ERROR');
      }
      notes = await notes.json();
      dispatch({type: types.FETCH_NOTES_SUCCESS, data: notes});
    } catch (error) {
      dispatch({type: types.FETCH_NOTES_FAILURE, error});
    }
  };
}
