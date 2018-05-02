import { RECIEVE_FILTER_UPDATE } from '../../constants/actionTypes';

export const filterReducer = (state = 'cute+puppies+kittens', action) => {
  switch (action.type) {
    case RECIEVE_FILTER_UPDATE:
      return action.data;
    default:
      return state;
    }
};
