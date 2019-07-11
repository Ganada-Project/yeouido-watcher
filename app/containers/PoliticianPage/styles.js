import { Container, Row } from 'reactstrap';
import styled from 'styled-components';

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .react-autosuggest__container {
    position: relative;
    width: 100%;
  }
  .react-autosuggest__input {
    width: 100%;
    height: 60px;
    padding: 10px 20px;
    font-weight: 300;
    font-size: 28px;
    border: 1px solid #aaa;
    border-radius: 4px;
    color: ${props => props.theme.pointColor};
  }

  .react-autosuggest__input--focused {
    outline: none;
  }

  .react-autosuggest__input--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .react-autosuggest__suggestions-container {
    display: none;
  }

  .react-autosuggest__suggestions-container--open {
    display: block;
    position: absolute;
    top: 60px;
    width: 100%;
    border: 1px solid #aaa;
    background-color: #fff;
    font-weight: 300;
    font-size: 16px;
    height: 320px;
    overflow-y: auto;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 2;
  }

  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 10px 20px;
  }

  .react-autosuggest__suggestion--highlighted {
    background-color: #ddd;
  }
`;

export const TitleRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20%;
  padding: 0 20%;
`;

export const SearchRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2% 25%;
  .btn-secondary {
    color: #fff;
    background-color: ${props => props.theme.pointColor};
    border-color: ${props => props.theme.pointColor};
    border-top-left-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
  }
  @media (max-width: 620px) {
    padding: 2% 10%;
  }
`;

export const AutoSuggestRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2% 10%;
`;

export const TitleKorean = styled.span`
  font-family: 'Black Han Sans', sans-serif;
  font-weight: 600;
  font-size: 52px;
  color: ${props => props.theme.pointColor};
`;

export const TitleEnglish = styled.span`
  margin-left: 10px;
  font-family: 'Barriecito', cursive;
  font-size: 52px;
  color: ${props => props.theme.pointColor};
`;

export const SuggestWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ProfileImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProfileImage = styled.img`
  width: auto;
  height: auto;
  max-width: 50px;
  max-height: 50px;
  border-radius: 5px;
`;
export const NameWrapper = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
`;
export const PartyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const PartyIcon = styled.img`
  width: 25px;
  height: 25px;
`;
