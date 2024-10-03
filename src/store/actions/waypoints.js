import { DEFAULT_ROUTE_WAYPOINTS } from "../../shared/constants";
import apiCalls from "../../utils/api/routes";
import { commonActionTypes } from "../constants/action-types/common";
import { waypointActionTypes } from "../constants/action-types/waypoints";

export const create = (data=DEFAULT_ROUTE_WAYPOINTS, successCallback) => ({
  type: commonActionTypes.COMMON__API_CALL,
  subType: waypointActionTypes.CREATE,
  promise: () => apiCalls.createWaypoint(data),
  successCallback,
});

export const remove = (data, successCallback) => ({
  type: commonActionTypes.COMMON__API_CALL,
  subType: waypointActionTypes.DELETE,
  promise: () => apiCalls.deleteWaypoint(data),
  successCallback,
});
export const update = (data, successCallback) => ({
  type: commonActionTypes.COMMON__API_CALL,
  subType: waypointActionTypes.UPDATE,
  promise: () => apiCalls.updateWaypoint(data),
  successCallback,
});
