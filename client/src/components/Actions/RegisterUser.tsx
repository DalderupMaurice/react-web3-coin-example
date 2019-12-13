import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from "../../redux/web3/web3Actions"

const RegisterUser = React.memo((props: any) => {
  const { data, error, loadedCount, progress, rollbackProgress } = useSelector((state: any) => state.nos.register);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Register state</h1>
      <h1>Times clicked: {loadedCount}</h1>
      <h1>Overall Progress: {progress}</h1>
      <h1>Rollback Progress: {rollbackProgress}</h1>
      <h1>Data: {data}</h1>
      <h1>Error: {error}</h1>
      <button onClick={() => dispatch(register(""))}>Hello</button>
    </>
  );
});

export default RegisterUser;
