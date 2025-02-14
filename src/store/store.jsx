import { createStore, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk'; // ✅ Correct

import reducer from "./reducer";

export const store = createStore(reducer, {}, applyMiddleware(thunk));
