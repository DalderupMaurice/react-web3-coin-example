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


import { StateType, ActionType, createReducer, Action, createAction, createAsyncAction, createCustomAction } from 'typesafe-actions';
import rootActions from "../config/rootActions";
import { RootState } from "../config/rootStates";

interface ActionRequest {
  shape: string;
}
interface ActionResponse {
  donut: boolean;
}
interface ActionError {
  message: string;
}
interface meta {
  type: string;
  id: string;
}
const actionWithMeta = createAsyncAction(
  'REQ_TYPE', 'SUCCESS_TYPE', 'FAILURE_TYPE', 'CANCEL_TYPE',
)<[ActionRequest, meta], [ActionResponse, meta], [ActionError, meta], [undefined, meta]>();
const x = actionWithMeta.success({ donut: true }, { type: "ke ", id: "1"})

const allActions = {
  ...actionWithMeta
}

const action2 = createCustomAction('TYPE2', (name: string, id: string) => ({
  payload: name, meta: { oe: "ah" },
}));

type RootAction = ActionType<typeof rootActions>;

// TODO cleanup this file
const commonReducer = (
  state: RootState = commonInitialState,
  actionState: RootAction
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

function actionReducer(state: Object = {}, actionState: RootAction) {
  const { id, type } = actionState.meta;

  if (type) {
    return set({ ...state }, id, commonReducer(get(state, id), actionState));
  } else {
    return state;
  }
}

export default function(
  state = globalInitialState,
  action: RootAction
): RootState {
  if (isRecognizedType(action)) {
    return {
      ...state,
      ...actionReducer(state, action)
    };
  } else {
    return state;
  }
}

function isRecognizedType(action: RootAction): boolean {
  const actionType = get(action, "meta.type");
  return ACTION_TYPES.includes(actionType);
}


