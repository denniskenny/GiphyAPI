import { RECIEVE_MODAL_UPDATE } from '../../constants/actionTypes';
import { modalReducer } from './modalReducer';

describe('Modal Reducer', () => {

    it('should set the default state when no state is passed in', () => {
        const action = {};
        const expected = {};
        const actual = modalReducer(undefined, action);

        expect(actual).toEqual(expected);
    });

    it('should handle a RECIEVE_MODAL_UPDATE correctly', () => {
        const state = {};
        const action = { type: RECIEVE_MODAL_UPDATE, show: false, imageId: '1234' };
        const expected = { show: false, imageId: '1234' };
        const actual = modalReducer(state, action);

        expect(actual).toEqual(expected);
    });
});
