/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeSelectSuggestions = () =>
  createSelector(
    selectHome,
    homeState => homeState.suggestions,
  );

export { selectHome, makeSelectUsername, makeSelectSuggestions };
