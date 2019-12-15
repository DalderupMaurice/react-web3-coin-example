export default class Web3Service {
  public register = async (username: string) => {
    await sleep(1000);

    const usernameId = username.split("-")[1];

    if(parseFloat(usernameId) > 0.4) {
      throw new Error(`Invalid username ${username}`);
    }

    return username;
  };
}


function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}