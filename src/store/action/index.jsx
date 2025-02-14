import React from 'react';
import { endpointSearch } from "../../config/api";
import axios from "axios";
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "./actionTypes";

const fetchDataRequest = () => ({
  type: SEARCH_REQUEST,
});

const fetchDataSuccess = (result, query) => ({
  type: SEARCH_SUCCESS,
  payload: {
    articles: result,
    query: query,
  },
});

const fetchDataFailure = (error) => ({
  type: SEARCH_FAILURE,
  payload: error,
});

export const searchArticle = (query) => async (dispatch) => {
  try {
    dispatch(fetchDataRequest());
    const response = await axios.get(endpointSearch(query));
    const result = response.data;
    dispatch(fetchDataSuccess(result, query));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

const SearchActions = () => {
  return (
    <div>
      <h2>Search Actions</h2>
      <p>Functions for handling search requests, successes, and failures.</p>
    </div>
  );
};

export default SearchActions;
