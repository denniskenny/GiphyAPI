import axios from 'axios';
import {
  RECIEVE_GIPHY_RESPONSE,
  RECIEVE_FILTER_UPDATE,
  RECIEVE_OFFSET_UPDATE,
  RECIEVE_MODAL_UPDATE } from './../constants/actionTypes';

export const updateOffset = (offset) => {
  return {
    type: RECIEVE_OFFSET_UPDATE,
    data: offset
  };
};

export const updateModal = (show, imageId) => {
  return {
    type: RECIEVE_MODAL_UPDATE,
    show,
    imageId
  };
};

export const updateCurrentFilter = (currentFilter) => {
  return {
    type: RECIEVE_FILTER_UPDATE,
    data: currentFilter
  };
};

export const recieveGiphyResults = (giphyResults) => {
  return {
    type: RECIEVE_GIPHY_RESPONSE,
    data: giphyResults
  };
};

export const fetchGifyResults = (filter = 'cute+puppies+kittens', offset = 0) => {
  return function (dispatch) {
    return axios({
      url: `http://api.giphy.com/v1/gifs/search`,
      timeout: 5000,
      params: {
        q: filter,
        rating: 'pg',
        offset: offset,
        limit: 10,
        api_key: '1PxfCFVSyCqRKaRLa6G02bZWHcDbobVv' //ToDO: PROD Ready API KEY - Requested from Gliphy - Awaiting response
      },
      method: 'get'
    }).then(({
      data: {
        data: gifs
      }
    }) => {
      return dispatch(recieveGiphyResults(gifs));
    }).catch((err) => {
       return err; 
    });
  };
};
