import { types } from './web3Actions';
import initialState from '../config/initialState';

const web3Reducer = (state = initialState.web3, { type, payload }: any) => {
  switch (type) {
    // Requests
    case types.REGISTER_USER_REQUEST:
      return Object.assign({}, state, { loading: true, errors: null });

    // Success
    case types.REGISTER_USER_SUCCESS:
      return Object.assign({}, state, {
        ...payload,
        errors: null,
        loading: false
      });

    // Failed
    case types.REGISTER_USER_FAILED:
      return Object.assign({}, state, { loading: false, errors: payload });

    default:
      return state;
  }
};

export default web3Reducer;
