import { fork, take, cancel } from 'redux-saga/effects';

import commonSaga from '../commonSaga';

// Custom implementation of takeLatest, extended with actionType
const takeLatestByActionType = (pattern: any, saga: any, ...args: any) => fork(function*() {
  let lastTask
  let lastActionType;

  while (true) {
    const action = yield take(pattern)
    if (lastTask && lastActionType === action.type) {
      yield cancel(lastTask) // cancel is no-op if the task has already terminated
    }
    lastTask = yield fork(saga, ...args.concat(action))
    lastActionType = action.type;
  }
})

export default function* rootSage() {
  yield takeLatestByActionType((arg: any) => arg.type.includes("ACTION/CALL"), commonSaga);
}
