import { RECIEVE_MODAL_UPDATE } from '../../constants/actionTypes';

export const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_MODAL_UPDATE:
      return {
      show: action.show,
      imageId: action.imageId
    };
    default:
      return state;
    }
};
