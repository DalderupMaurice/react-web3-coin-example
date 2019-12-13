import { call, put } from 'redux-saga/effects';

import Web3Service from '../../services/Web3Service';
import { registerSuccess, registerFailed } from './web3Actions';

const web3Service = new Web3Service();

export function* registerSaga(data1: any) {
  try {
    const user = yield call(web3Service.register, data1.payload);
    yield put(registerSuccess(user));
  } catch (e) {
    yield put(registerFailed(e));
  }
}
