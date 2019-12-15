export const commonInitialState: State = {
  progress: "INITIAL",
  rollbackProgress: null,
  loadedCount: 0,
  data: null,
  error: null
};

export default {
  myActionId: {
    ...commonInitialState
  }
};
