import { RECIEVE_GIPHY_RESPONSE } from '../../constants/actionTypes';

export const gifsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case RECIEVE_GIPHY_RESPONSE:
      return action.data;
    default: 
      return state;
    }
};
