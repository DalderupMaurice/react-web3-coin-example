import { fork, take, cancel } from "redux-saga/effects";

import commonSaga from "../common/commonSaga";

// Custom implementation of takeLatest
const takeLatestById = (pattern: any, saga: any, ...args: any) =>
  fork(function*() {
    let lastTask: any = {};

    while (true) {
      // Take any call, clean or reset action
      const action = yield take(pattern);

      // Cancel the previous call BY ID if it exists in ANY case
      if (lastTask[action.meta.id]) {
        // cancel is no-op if the task has already terminated
        yield cancel(lastTask[action.meta.id]);
      }

      // Only execute a new saga when actionType is a CALL
      if (action.meta.type.includes("ACTION/CALL")) {
        lastTask[action.meta.id] = yield fork(saga, ...args.concat(action));
      }
    }
  });

export default function* rootSage() {
  yield takeLatestById(
    (arg: any) =>
      arg.type.includes("ACTION/CALL") ||
      arg.type.includes("ACTION/RESET") ||
      arg.type.includes("ACTION/CLEAN"),
    commonSaga
  );
}
