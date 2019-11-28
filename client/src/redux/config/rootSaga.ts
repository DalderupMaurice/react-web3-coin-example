import { takeLatest } from 'redux-saga/effects';

import { registerSaga } from '../web3/web3Saga';
import { types } from '../web3/web3Actions';

export default function* rootSage() {
  yield takeLatest(types.REGISTER_USER_REQUEST, registerSaga);
}
