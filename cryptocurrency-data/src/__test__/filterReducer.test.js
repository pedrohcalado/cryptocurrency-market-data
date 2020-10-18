import { SET_FILTER, SET_FILTER_ORDER } from '../actions';
import filterReducer, { INITIAL_STATE } from '../reducers/filterReducer';

describe('Filter reducer', () => {

  it('Should return default state', () => {
    const newState = filterReducer(undefined, {});
    expect(newState).toEqual(INITIAL_STATE);
  });

  it('Should return a new state if receiving a type SET_FILTER', () => {
    const newState = filterReducer(undefined, {
      type: SET_FILTER,
      filter: 'baseVolume',
    });
    expect(newState).toEqual({
      selectedFilter: 'baseVolume',
      order: 'DESC',
    });
  });

  it('Should return a new state if receiving a type SET_FILTER_ORDER', () => {
    const newState = filterReducer(undefined, {
      type: SET_FILTER_ORDER,
      order: 'ASC',
    });
    expect(newState).toEqual({
      selectedFilter: 'last',
      order: 'ASC',
    });
  });
});
