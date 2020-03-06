import actionsCreator from "../../utils/actionsCreator";
import Web3Service from "../../services/Web3Service";

const id = "mySecondActionId";

type Donut = {
  shape: string;
}

const pindaActions = actionsCreator<Donut, Donut[]>(id, async (a: Donut) => {
  console.log('Params PindaActions ', a);
  const result = await new Web3Service().register(a.shape);
  return [a, a];
});

export default pindaActions;

