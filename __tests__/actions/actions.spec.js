import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/js/actions/index';
import * as types from '../../src/js/constants/action-types';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Testing async action creators', () => {
  afterEach(() => {
    fetchMock.restore()
  });

  it('creates a SORT_ASCENDING action and dispatches to reducer', () => {
    fetchMock.getOnce('/data', {
      body: { data: ['do something'] },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: types.SORT_ASCENDING, payload: {} },
    ];
    const store = mockStore({ data: [] });

    store.dispatch(actions.sortAscendingAction());
    expect(store.getActions()).toEqual(expectedActions);
    
  });
  it('creates a SORT_DESCENDING action and dispatches to reducer', () => {
    fetchMock.getOnce('/data', {
      body: { data: ['do something'] },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: types.SORT_DESCENDING, payload: {} },
    ];
    const store = mockStore({ data: [] });

    store.dispatch(actions.sortDescendingAction());
    expect(store.getActions()).toEqual(expectedActions);
    
  });
  it('creates a FILTER_BY_TYPE action and dispatches to reducer', () => {
    fetchMock.getOnce('/data', {
      body: { data: ['do something'] },
      headers: { 'content-type': 'application/json' }
    });

    const value = 'Some randomg string';

    const expectedActions = [
      { type: types.FILTER_BY_TYPE, payload: value },
    ];
    const store = mockStore({ data: [] });

    store.dispatch(actions.filterByTypeAction(value));
    expect(store.getActions()).toEqual(expectedActions);
    
  });
  it('creates a DELETE action and dispatches to reducer', () => {
    fetchMock.getOnce('/data', {
      body: { data: ['do something'] },
      headers: { 'content-type': 'application/json' }
    });

    const value = 1;

    const expectedActions = [
      { type: types.DELETE, payload: value },
    ];
    const store = mockStore({ data: [] });

    store.dispatch(actions.deleteReportAction(value));
    expect(store.getActions()).toEqual(expectedActions);
    
  });
  it('creates a ADD_REPORT action and dispatches to reducer', () => {
    fetchMock.getOnce('/data', {
      body: { data: ['do something'] },
      headers: { 'content-type': 'application/json' }
    });

    const new_record = {
        name: 'Test name',
        type: 'Test type',
        chartType: 'Test chartType',
        filterTypes: ['test-one', 'test-two'],
        frequency: 'yearly',
        active: true
    };

    const expectedActions = [
      { type: types.ADD_REPORT, payload: new_record },
    ];
    const store = mockStore({ data: [] });

    store.dispatch(actions.addReportAction(new_record));
    expect(store.getActions()).toEqual(expectedActions);
    
  });
});

