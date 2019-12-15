import { call, put } from 'redux-saga/effects';

import { ACTION_SUCCESS, ACTION_FAILURE } from '../../utils/actionsCreator';

export default function* commonSaga(actionState: any) {
  try {
    // TODO - use select() effect to get state and return if 'shouldCall' is false (add shouldCall to actionState)

    const result = yield call(actionState.func, actionState.payload);
    yield put(success(result, actionState.meta));
  } catch (e) {
    yield put(failure(e.message || e, actionState.meta));
  }
}


const success = (result: any, meta: any) => ({
  type: `${meta.id}/ACTION/SUCCESS`,
  payload: result,
  meta: {
    ...meta,
    type: ACTION_SUCCESS,
  }
});

const failure = (error: any, meta: any) => ({
  type: `${meta.id}/ACTION/FAILURE`,
  payload: error,
  meta: {
    ...meta,
    type: ACTION_FAILURE,
  }
});
