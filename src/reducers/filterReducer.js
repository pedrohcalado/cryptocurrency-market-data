import { SET_FILTER, SET_FILTER_ORDER } from '../actions';

export const INITIAL_STATE = {
  selectedFilter: 'last',
  order: 'DESC',
};

export default function filterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FILTER:
      return ({
        ...state,
        selectedFilter: action.filter,
      });
    case SET_FILTER_ORDER:
      return ({
        ...state,
        order: action.order,
      })
    default:
      return state;
  };
};
