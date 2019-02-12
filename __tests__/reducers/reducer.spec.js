
import * as types from '../../src/js/constants/action-types';
import { utils } from '../../src/js/utils/index';
import reducer from '../../src/js/reducers/index';
import expect from 'expect';
import mockData from '../../src/js/state-data/mock-data.json';


describe('Records reducer', () => {

    const filterValue = 'Gender';
    const delIndex = 0;

    const initialState = {
        data: mockData
    };

    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(
        {
            data: [...initialState.data]
        }
      )
    });
  
    it('should handle SORT_ASCENDING', () => {
      expect(
        reducer(initialState, {
          type: types.SORT_ASCENDING,
          payload: {}
        })
      ).toEqual(
        {
         data: [...initialState.data]
        }
      );
    });
    it('Should handle SORT_DESCENDING', () => {
      expect(
        reducer(initialState,
          {
            type: types.SORT_DESCENDING,
            payload: {}
          }
        )
      ).toEqual({
        data: utils.sortDesc(initialState)
      });
    });
    it('Should handle FILTER_BY_TYPE', () => {
      expect(
        reducer(initialState,
          {
            type: types.FILTER_BY_TYPE,
            payload: filterValue
          }
        )
      ).toEqual({
        data: utils.filterByType(initialState, filterValue)
      });
    });
    it('Should handle DELETE', () => {
        const res = utils.deleteReport(initialState, delIndex);
        expect(res.length).toEqual(mockData.length)
    });

    it('Should handle ADD_REPORT', () => {
      const new_record_two = {
        name: 'Test name',
        type: 'Test type',
        chartType: 'Test chartType',
        filterTypes: ['test-one', 'test-two'],
        frequency: 'yearly',
        active: true
    };
      const res = utils.addReport(initialState, new_record_two);
      expect(res).toEqual(mockData);
    });
  });