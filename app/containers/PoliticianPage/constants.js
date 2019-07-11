/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';

export const GET_AUTO_SUGGESTIONS_REQUEST =
  'yeoido-watcher/Home/GET_AUTO_SUGGESTIONS_REQUEST';
export const GET_AUTO_SUGGESTIONS_SUCCESS =
  'yeoido-watcher/Home/GET_AUTO_SUGGESTIONS_REQUEST_SUCCESS';
export const GET_AUTO_SUGGESTIONS_FAIL =
  'yeoido-watcher/Home/GET_AUTO_SUGGESTIONS_REQUEST_FAIL';

export const partyList = [
  {
    id: 1,
    name: '더불어 민주당',
  },
  {
    id: 2,
    name: '자유 한국당',
  },
];
