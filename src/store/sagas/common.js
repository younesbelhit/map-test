import { takeEvery, call, put, race } from "redux-saga/effects";
import { commonActionTypes } from "../constants/action-types/common";
import { get, take } from "lodash";

function* handleApiCall(action) {
  const { promise, subType,successCallback } = action;
  const { START, SUCCESS, FAIL } = subType;

  const startAction = () => ({ type: START });

  yield put(startAction());

  try {
    const response = (yield call(promise)) || {};
    const data = get(response, "data");
    const successAction = () => ({
      type: SUCCESS,
      payload: data,
    });
    yield put(successAction());
    
    if(successCallback){
      successCallback({...data})
    }
  } catch (e) {
    const failAction = () => ({ type: FAIL, payload: e });
    yield put(failAction());
  }
}

function* watch() {
  yield takeEvery(commonActionTypes.COMMON__API_CALL, handleApiCall);
}

export default watch;
