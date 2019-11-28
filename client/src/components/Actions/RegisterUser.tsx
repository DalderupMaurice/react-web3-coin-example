import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const RegisterUser = React.memo((props: any) => {
  const todos = useSelector((state: any) => state.web3);
  const dispatch = useDispatch();

  console.log(todos);
  console.log(dispatch);

  return (
    <>
      <h1>Helloeee</h1>
      <button onClick={() => dispatch({ type: 'REGISTER_USER_REQUEST' })}>Hello</button>
    </>
  );
});

export default RegisterUser;
