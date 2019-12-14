import { call, put } from 'redux-saga/effects';

import Web3Service from '../../services/Web3Service';
import userActions, { registerFailed, registerSuccess } from './web3Actions';

const web3Service = new Web3Service();

export function* registerSaga(arg1: any) {
  try {
    const user = yield call(web3Service.register, arg1.payload);
    yield put(registerSuccess(user));
  } catch (e) {
    yield put(registerFailed(e.message || e));
  }
}
