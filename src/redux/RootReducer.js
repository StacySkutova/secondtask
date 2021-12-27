import { combineReducers } from "redux";

import songbirdReducer from "./SongbirdReducer";

export default combineReducers({
  songbird: songbirdReducer,
});
