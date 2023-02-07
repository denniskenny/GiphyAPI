import { RECIEVE_OFFSET_UPDATE } from '../../constants/actionTypes';

export const offsetReducer = (state = 0, action) => {
  switch (action.type) {
    case RECIEVE_OFFSET_UPDATE:
      return action.data;
    default: 
      return state;
    }
};
