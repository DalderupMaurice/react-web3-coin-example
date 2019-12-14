// export const types = {
//   REGISTER_USER_REQUEST: 'REGISTER_USER_REQUEST/ACTION/CALL',
//   REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS/ACTION/SUCCESS',
//   REGISTER_USER_FAILED: 'REGISTER_USER_FAILED/ACTION/FAILURE'
// };

// export const register = (user: any): ActionState => ({
//   type: types.REGISTER_USER_REQUEST,
//   payload: user,
//   meta: {
//     type: "ACTION/CALL",
//     id: "register"
//   }
// });

import actionsCreator from "../../utils/actionsCreator";
import Web3Service from "../../services/Web3Service";

const id = "myActionId";

export const registerSuccess = (user: any) => ({
  type: `${id}/ACTION/SUCCESS`,
  payload: user,
  meta: {
    type: "ACTION/SUCCESS",
    id: "register"
  }
});

export const registerFailed = (error: any) => ({
  type: `${id}/ACTION/FAILURE`,
  payload: error,
  meta: {
    type: "ACTION/FAILURE",
    id: "register"
  }
});


const userActions = actionsCreator(id, async (a: any, b: any, c: any, d: any) => {
  console.log("LOGGING ALL PARAMS", a, b, c, d);

  const x = await new Web3Service().register(a);

  console.log("results ", x)

  return { a, b, c, d };
});

console.log("ACTIONS CREATED", userActions);

export default userActions;