/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_USERNAME,
  GET_AUTO_SUGGESTIONS_REQUEST,
  GET_AUTO_SUGGESTIONS_FAIL,
  GET_AUTO_SUGGESTIONS_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  suggestionLoading: false,
  suggestions: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;
      case GET_AUTO_SUGGESTIONS_REQUEST:
        draft.suggestionLoading = true;
        break;
      case GET_AUTO_SUGGESTIONS_SUCCESS:
        draft.suggestions = action.suggestions;
        break;
    }
  });

export default homeReducer;
