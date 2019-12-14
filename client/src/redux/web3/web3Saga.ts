import { call, put } from 'redux-saga/effects';

import Web3Service from '../../services/Web3Service';
import userActions, { registerFailed, registerSuccess } from './web3Actions';

export function* registerSaga(arg1: any) {
  try {

    console.log("ARG!1", arg1);
    const user = yield call(arg1.func, arg1.payload);
    console.log('restult', user);
    yield put(registerSuccess(user));
  } catch (e) {
    yield put(registerFailed(e.message || e));
  }
}
