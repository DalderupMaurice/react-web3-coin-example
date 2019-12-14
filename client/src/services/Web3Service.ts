export default class Web3Service {
  public register = async (payload: any) => {
    await sleep(1000);
  };
}


function sleep(ms: any) {
  return new Promise(resolve => setTimeout(resolve, ms));
}