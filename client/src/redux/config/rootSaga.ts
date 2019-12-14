import { takeLatest } from 'redux-saga/effects';

import { registerSaga } from '../web3/web3Saga';
import userActions from "../web3/web3Actions"

export default function* rootSage() {
  yield takeLatest(userActions.actionTypes.CALL, registerSaga);
}
