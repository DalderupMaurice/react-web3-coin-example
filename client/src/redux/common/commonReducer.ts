import { get, set } from "lodash";
import globalInitialState from "../initialState";
import {
  ACTION_CALL,
  ACTION_SUCCESS,
  LOADING,
  LOADED,
  ACTION_FAILURE,
  FAILED,
  ACTION_RESET,
  ACTION_CANCEL,
  ACTION_TYPES,
  commonInitialState
} from "../../utils/constants";

// TODO cleanup this file
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
        rollbackProgress: state.progress,
        data: actionState.payload,
        error: null,
        loadedCount: state.loadedCount + 1
      };
    case ACTION_FAILURE:
      return {
        ...state,
        progress: FAILED,
        rollbackProgress: state.progress,
        data: null,
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

  if (type) {
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


