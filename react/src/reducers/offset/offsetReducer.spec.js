import { RECIEVE_OFFSET_UPDATE } from './../../constants/actionTypes';
import { offsetReducer } from './offsetReducer';

describe('Offset Reducer', () => {

    it('should set the default state when no state is passed in', () => {
        const action = { type: {} };
        const expected = 0;

        expect(offsetReducer(undefined, action)).toEqual(expected);
    });

    it('should handle a RECIEVE_OFFSET_UPDATE correctly', () => {
        const action = { type: RECIEVE_OFFSET_UPDATE, data: 15 };
        const expected = 15;
        const actual = offsetReducer(0, action);

        expect(actual).toEqual(expected);
    });
});
