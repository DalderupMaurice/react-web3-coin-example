import actionsCreator from "../../utils/actionsCreator";
import Web3Service from "../../services/Web3Service";

const id = "myActionId";

const userActions = actionsCreator(id, async (a: any, b: any, c: any, d: any) => {
  console.log('Params UserActions ', a, b, c, d);
  const result = await new Web3Service().register(a);
  return result;
});

export default userActions;