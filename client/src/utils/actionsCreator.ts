import { createCustomAction } from "typesafe-actions";

import { ACTION_CALL, ACTION_CANCEL, ACTION_SUCCESS, ACTION_FAILURE, ACTION_RESET } from "./constants";

const createActionTypes = (statePath: string) => ({
  CALL: `${statePath}/${ACTION_CALL}`,
  CANCEL: `${statePath}/${ACTION_CANCEL}`,
  SUCCESS: `${statePath}/${ACTION_SUCCESS}`,
  FAILURE: `${statePath}/${ACTION_FAILURE}`,
  RESET: `${statePath}/${ACTION_RESET}`
});

export default function createActions<T, P>(
  id: string,
  createAdaptor: (data: T, prevData?: P) => Promise<P>,
  options?: any
) {
  const actionTypes = createActionTypes(id);

  const call = createCustomAction(actionTypes.CALL, (props: T) => ({
    type: actionTypes.CALL,
    types: actionTypes,
    meta: { type: ACTION_CALL, id },
    func: createAdaptor,
    payload: props,
    cache: options?.cache
  }));

  const cancel = createCustomAction(actionTypes.CANCEL, () => ({
    type: actionTypes.CANCEL,
    types: actionTypes,
    meta: { type: ACTION_CANCEL, id },
    payload: undefined
  }));

  const reset = createCustomAction(actionTypes.RESET, () => ({
    type: actionTypes.RESET,
    types: actionTypes,
    meta: { type: ACTION_RESET, id },
    payload: undefined
  }));

  // const call = (props: T) => ({
  //   type: actionTypes.CALL,
  //   types: actionTypes,
  //   meta: { type: ACTION_CALL, id },
  //   func: createAdaptor,
  //   payload: props,
  //   cache: options?.cache
  // });

  // const cancel = () => ({
  //   type: actionTypes.CANCEL,
  //   types: actionTypes,
  //   meta: { type: ACTION_CANCEL, id }
  // });

  // const reset = () => ({
  //   type: actionTypes.RESET,
  //   types: actionTypes,
  //   meta: { type: ACTION_RESET, id }
  // });

  // Optional named return values
  // return {
  //   id,
  //   [`${id}`]: call,
  //   [`cancel${id}`]: cancel,
  //   [`reset${id}`]: reset,
  //   actionTypes
  // };

  return {
    id,
    call,
    cancel,
    reset,
    actionTypes
  };
}
