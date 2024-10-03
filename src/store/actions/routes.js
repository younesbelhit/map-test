import apiCalls from "../../utils/api/routes";
import { commonActionTypes } from "../constants/action-types/common";
import { routesActionTypes } from "../constants/action-types/routes";

export const get = (_) => ({
  type: commonActionTypes.COMMON__API_CALL,
  subType: routesActionTypes.GET,
  promise: () => apiCalls.get(),
});

export const getOne = (id,successCallback) => ({
  type: commonActionTypes.COMMON__API_CALL,
  subType: routesActionTypes.GET_ONE,
  promise: () => apiCalls.getOne(id),
  successCallback
});

export const create = (data, successCallback) => ({
  type: commonActionTypes.COMMON__API_CALL,
  subType: routesActionTypes.CREATE,
  promise: () => apiCalls.create(data),
  successCallback,
});

export const edit = (data, successCallback) => ({
  type: commonActionTypes.COMMON__API_CALL,
  subType: routesActionTypes.UPDATE,
  promise: () => apiCalls.update(data),
  successCallback,
});

export const remove = (id, successCallback) => ({
  type: commonActionTypes.COMMON__API_CALL,
  subType: routesActionTypes.DELETE,
  promise: () => apiCalls.delete(id),
  successCallback,
});

export const SHOW_ON_MAP = "map.show";
export const showOnMap = (currentRoute) => ({
  type: SHOW_ON_MAP,
  payload: currentRoute,
});
