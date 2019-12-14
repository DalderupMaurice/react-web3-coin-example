import { call, put } from 'redux-saga/effects';

import  { registerFailed, registerSuccess } from './web3/web3Actions';

export default function* commonSaga(arg1: any) {
  try {
    const user = yield call(arg1.func, arg1.payload);
    yield put(registerSuccess(user));
  } catch (e) {
    yield put(registerFailed(e.message || e));
  }
}
