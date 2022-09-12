import { combineReducers } from "redux";
import dragonReducer from "./dragonReducer";
import titleReducer from "./titleReducer";

export default combineReducers({
   title: titleReducer,
   dragon: dragonReducer
})