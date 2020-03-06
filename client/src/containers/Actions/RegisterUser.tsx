import React from 'react';
import UserActions from "../../redux/actions/web3Actions"
import PindaActions from "../../redux/actions/pindaActions"
import useActions from "../../hooks/useActions";
import { useDispatch } from 'react-redux';
import useSelector from '../../hooks/useSelector';

// TODO dispatch normal redux saga action to verify everything is working
const RegisterUser = React.memo((props: any) => {
  const { data, error, loadedCount, progress, rollbackProgress } = useSelector(state => state.nos.data);
  const dispatch = useDispatch(PindaActions.call({ shape: "string" }))

  // Optionally to bind multiple actions
  const [ userActions, pindaActions ] = useActions([ UserActions, PindaActions ]);

  // Single action mapping
  const registerAction = useActions(UserActions);

  return (
    <>
      <h1>Register state</h1>
      <h1>Times loadedd: {loadedCount}</h1>
      <h1>Overall Progress: {progress}</h1>
      <h1>Rollback Progress: {rollbackProgress}</h1>
      <h1>Data: {JSON.stringify(data)}</h1>
      <h1>Error: {JSON.stringify(error)}</h1>
      <br />
      <br />
      <h3>Multi Bind</h3>
      <button onClick={() => userActions.call(`Pingu-${Math.random()}`)}>User call</button>
      <br />
      <br />
      <h3>Single Bind</h3>
      <button onClick={() => registerAction.call(`Pingu-${Math.random()}`)}>User call</button>
      <button onClick={() => registerAction.cancel()}>Cancel User call</button>
      <button onClick={() => registerAction.reset()}>Reset User call</button>
      <br />
      <br />
      <h3>Pinda Action Multi Bind</h3>
      <button onClick={() => pindaActions.call(`Pingu-${Math.random()}`)}>Pinda Actions </button>
    </>
  );
});

export default RegisterUser;
