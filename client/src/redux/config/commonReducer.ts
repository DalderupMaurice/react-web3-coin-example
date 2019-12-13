import { get, set, unset } from "lodash";
import globalInitialState, { commonInitialState } from "./initialState";

export const ACTION_CALL: ActionType = "ACTION/CALL";
export const ACTION_CANCEL: ActionType = "ACTION/CANCEL";
export const ACTION_SUCCESS: ActionType = "ACTION/SUCCESS";
export const ACTION_FAILURE: ActionType = "ACTION/FAILURE";
export const ACTION_RESET: ActionType = "ACTION/RESET";
export const ACTION_CLEAN: ActionType = "ACTION/CLEAN";

export const INITIAL: Progress = "INITIAL";
export const LOADING: Progress = "LOADING";
export const LOADED: Progress = "LOADED";
export const FAILED: Progress = "FAILED";

const commonReducer = (
  state: State = commonInitialState,
  actionState: ActionState
) => {
  switch (actionState.meta.type) {
    case ACTION_CALL:
      return { ...state, progress: LOADING, rollbackProgress: state.progress };
    case ACTION_SUCCESS:
      return {
        ...state,
        progress: LOADED,
        rollbackProgress: LOADED,
        data: actionState.payload,
        loadedCount: state.loadedCount + 1
      };
    case ACTION_FAILURE:
      return {
        ...state,
        progress: FAILED,
        rollbackProgress: FAILED,
        error: actionState.payload
      };
    case ACTION_RESET:
      return { ...state, ...commonInitialState };
    case ACTION_CANCEL:
      return { ...state, progress: state.rollbackProgress };
    default:
      return state;
  }
};

function actionReducer(state: Object = {}, actionState: ActionState): Object {
  const { id, type } = actionState.meta;

  if (type === ACTION_CLEAN) {
    return unset({ ...state }, id);
  } else if (type) {
    return set({ ...state }, id, commonReducer(get(state, id), actionState));
  } else {
    return state;
  }
}

export default function(
  state: Object = globalInitialState,
  action: ActionState
): Object {
  if (isRecognizedType(action)) {
    return {
      ...state,
      ...actionReducer(state, action)
    };
  } else {
    return state;
  }
}

function isRecognizedType(action: Object): boolean {
  const actionType = get(action, "meta.type") || get(action, "type");
  return ACTION_TYPES.includes(actionType);
}

const ACTION_TYPES = [
  ACTION_CALL,
  ACTION_CANCEL,
  ACTION_SUCCESS,
  ACTION_FAILURE,
  ACTION_RESET,
  ACTION_CLEAN
];
