/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import Autosuggest from 'react-autosuggest';

import { loadRepos } from '../App/actions';
import {
  Wrapper,
  TitleRow,
  SearchRow,
  TitleKorean,
  TitleEnglish,
  SuggestWrapper,
  ProfileImage,
  ProfileImageWrapper,
  NameWrapper,
  PartyWrapper,
  PartyIcon,
} from './styles';
import { changeUsername, getAutoSuggestRequestAction } from './actions';
import { makeSelectUsername, makeSelectSuggestions } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function PoliticianPage({
  username,
  onSubmitForm,
  getAutoSuggest,
  suggestions,
}) {
  const [searchValue, setValue] = useState('');
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  function onChange(event, { newValue }) {
    setValue(newValue);
  }

  function getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  function renderSuggestion(suggestion) {
    return (
      <SuggestWrapper>
        <ProfileImageWrapper>
          <ProfileImage src={suggestion.photo} />
        </ProfileImageWrapper>
        <NameWrapper>
          <span>{suggestion.name}</span>
        </NameWrapper>
        <PartyWrapper>
          <PartyIcon src={suggestion.party === '2' ? Onepng : Twopng} />
        </PartyWrapper>
      </SuggestWrapper>
    );
  }

  function onSuggestionsFetchRequested({ value }) {
    getAutoSuggest({ searchValue: value });
  }

  const inputProps = {
    placeholder: '정치인을 입력하세요',
    value: searchValue,
    onChange,
  };

  return (
    <Wrapper>
      <Helmet>
        <title>::여의도 와쳐</title>
        <meta
          name="description"
          content="A React.js Boilerplate application politicianPage"
        />
      </Helmet>
      <TitleRow>
        <TitleKorean>여의도</TitleKorean>
        <TitleEnglish>Watcher</TitleEnglish>
      </TitleRow>
      <SearchRow>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </SearchRow>
    </Wrapper>
  );
}

PoliticianPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  getAutoSuggest: PropTypes.func,
  suggestions: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  suggestions: makeSelectSuggestions(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    getAutoSuggest: ({ searchValue }) =>
      dispatch(getAutoSuggestRequestAction({ searchValue })),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PoliticianPage);
