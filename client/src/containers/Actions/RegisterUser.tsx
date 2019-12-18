import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserActions from "../../redux/actions/web3Actions"
import PindaActions from "../../redux/actions/pindaActions"
import useActions from "../../hooks/useActions";

const RegisterUser = React.memo((props: any) => {
  const { data, error, loadedCount, progress, rollbackProgress } = useSelector((state: any) => state.nos.myActionId);
  const second = useSelector((state: any) => state.nos.mySecondAction);

  // Optionally to bundle multiple actions
  const [ userActions, pindaActions ] = useActions([ UserActions, PindaActions ]);

  // Single action mapping
  const registerAction = useActions(userActions);

  return (
    <>
      <h1>Register state</h1>
      <h1>Times loadedd: {loadedCount}</h1>
      <h1>Overall Progress: {progress}</h1>
      <h1>Rollback Progress: {rollbackProgress}</h1>
      <h1>Data: {JSON.stringify(data)}</h1>
      <h1>Error: {JSON.stringify(error)}</h1>
      <button onClick={() => userActions.call(`Pingu-${Math.random()}`)}>User Actions Multi map call</button>
      <br />
      <br />
      <button onClick={() => registerAction.call(`Pingu-${Math.random()}`)}>Use Action Single map call</button>
      <button onClick={() => registerAction.cancel()}>Cancel User Actions</button>
      <button onClick={() => registerAction.reset()}>Reset User Actions</button>
      <br />
      <br />
      <button onClick={() => pindaActions.call(`Pingu-${Math.random()}`)}>Pinda Actions Multi map call</button>
    </>
  );
});

export default RegisterUser;
