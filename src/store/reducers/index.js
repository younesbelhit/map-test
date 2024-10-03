import { combineReducers } from "redux";
import routes from "./routes";
import StoreTypes from "../constants/store-types";

const appReducers = combineReducers({
  [StoreTypes.ROUTES]: routes,
});

export default appReducers;
