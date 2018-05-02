import { RECIEVE_FILTER_UPDATE } from '../../constants/actionTypes';
import { filterReducer } from './filterReducer';

describe('Filter Reducer', () => {

    it('should set the default state when no state is passed in', () => {
        const action = {};
        const expected = 'cute+puppies+kittens';
        const actual = filterReducer(undefined, action);

        expect(actual).toEqual(expected);
    });

    it('should handle a RECIEVE_FILTER_UPDATE correctly', () => {
        const state = 'cute+puppies+kittens';
        const action = { type: RECIEVE_FILTER_UPDATE, data: 'cute+puppies' };
        const expected = 'cute+puppies';
        const actual = filterReducer(state, action);

        expect(actual).toEqual(expected);
    });
});
