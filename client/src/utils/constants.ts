export const INITIAL: Progress = "INITIAL";
export const LOADING: Progress = "LOADING";
export const LOADED: Progress = "LOADED";
export const FAILED: Progress = "FAILED";

export const ACTION_CALL: ActionType = "ACTION/CALL";
export const ACTION_CANCEL: ActionType = "ACTION/CANCEL";
export const ACTION_SUCCESS: ActionType = "ACTION/SUCCESS";
export const ACTION_FAILURE: ActionType = "ACTION/FAILURE";
export const ACTION_RESET: ActionType = "ACTION/RESET";

export const ACTION_TYPES = [
  ACTION_CALL,
  ACTION_CANCEL,
  ACTION_SUCCESS,
  ACTION_FAILURE,
  ACTION_RESET
];

export const commonInitialState: State = {
  progress: INITIAL,
  rollbackProgress: null,
  loadedCount: 0,
  data: null,
  error: null
};
