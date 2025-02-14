import React from 'react';
import { combineReducers } from "redux";
import searchArticle from "./searchArticle";

const reducer = combineReducers({
  search: searchArticle,
});

const RootReducer = () => {
  return (
    <div>
      <h2>Root Reducer</h2>
      <p>Combines all reducers into a single root reducer.</p>
    </div>
  );
};

export default reducer;
export { RootReducer };
