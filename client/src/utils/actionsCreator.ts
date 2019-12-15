// Desired output:
// export function loadPosts(userId) {
//   return {
//     types: ["LOAD_POSTS_REQUEST", "LOAD_POSTS_SUCCESS", "LOAD_POSTS_FAILURE"],
//     shouldExecute: state => !state.posts[userId], --> optional
//     func: () => ({ functionReturningSomething }),
//     payload: { userId }
//   };
// }

export const INITIAL: Progress = "INITIAL";
export const LOADING: Progress = "LOADING";
export const LOADED: Progress = "LOADED";
export const FAILED: Progress = "FAILED";

export const ACTION_CALL: ActionType = "ACTION/CALL";
export const ACTION_CANCEL: ActionType = "ACTION/CANCEL";
export const ACTION_SUCCESS: ActionType = "ACTION/SUCCESS";
export const ACTION_FAILURE: ActionType = "ACTION/FAILURE";
export const ACTION_RESET: ActionType = "ACTION/RESET";

const createActionTypes = (statePath: string) => ({
  CALL: `${statePath}/${ACTION_CALL}`,
  CANCEL: `${statePath}/${ACTION_CANCEL}`,
  SUCCESS: `${statePath}/${ACTION_SUCCESS}`,
  FAILURE: `${statePath}/${ACTION_FAILURE}`,
  RESET: `${statePath}/${ACTION_RESET}`
});

export default function createActions(id: string, createAdaptor: any) {
  const actionTypes = createActionTypes(id);

  const call = (props: any) => ({
    type: actionTypes.CALL,
    types: actionTypes,
    meta: { type: ACTION_CALL, id },
    func: createAdaptor,
    payload: props
  });

  const cancel = () => ({
    type: actionTypes.CANCEL,
    types: actionTypes,
    meta: { type: ACTION_CANCEL, id }
  });

  const reset = () => ({
    type: actionTypes.RESET,
    types: actionTypes,
    meta: { type: ACTION_RESET, id }
  });

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
