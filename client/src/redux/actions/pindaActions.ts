import actionsCreator from "../../utils/actionsCreator";
import Web3Service from "../../services/Web3Service";

const id = "mySecondActionId";

const pindaActions = actionsCreator(id, async (a: any, b: any, c: any, d: any) => {
  console.log('Params PindaActions ', a, b, c, d);
  const result = await new Web3Service().register(a);
  return result;
});

export default pindaActions;