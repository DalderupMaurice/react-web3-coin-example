export const types = {
  REGISTER_USER_REQUEST: 'REGISTER_USER_REQUEST/ACTION/CALL',
  REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS/ACTION/SUCCESS',
  REGISTER_USER_FAILED: 'REGISTER_USER_FAILED/ACTION/FAILURE'
};

export const register = (user: any): ActionState => ({
  type: types.REGISTER_USER_REQUEST,
  payload: user,
  meta: {
    type: "ACTION/CALL",
    id: "register"
  }
});

export const registerSuccess = (user: any) => ({
  type: types.REGISTER_USER_SUCCESS,
  payload: user,
  meta: {
    type: "ACTION/SUCCESS",
    id: "register"
  }
});

export const registerFailed = (error: any) => ({
  type: types.REGISTER_USER_FAILED,
  payload: error,
  meta: {
    type: "ACTION/FAILURE",
    id: "register"
  }
});
