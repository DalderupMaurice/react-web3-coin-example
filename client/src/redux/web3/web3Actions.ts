export const types = {
  REGISTER_USER_REQUEST: 'REGISTER_USER_REQUEST',
  REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
  REGISTER_USER_FAILED: 'REGISTER_USER_FAILED'
};

export const register = (user: any) => ({
  type: types.REGISTER_USER_REQUEST,
  payload: user
});

export const registerSuccess = (user: any) => ({
  type: types.REGISTER_USER_SUCCESS,
  payload: user
});

export const registerFailed = (error: any) => ({
  type: types.REGISTER_USER_FAILED,
  payload: error
});
