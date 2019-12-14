export default ({ dispatch, getState }: any) => (next: any) => (action: any) => {
    const { types, func = () => ({}), payload = {} } = action;
  
    if (!types) {
      // Normal action: pass it on
      return next(action);
    }
  
    // TODO check on types
    // if (
    //   !Array.isArray(types) ||
    //   types.length > 3 ||
    //   !types.every(type => typeof type === "string")
    // ) {
    //   throw new Error("Expected an array of three string types.");
    // }
  
    if (typeof func !== "function") {
      throw new Error("Expected a function");
    }
  
    dispatch({
      payload,
      type: types.CALL
    });
  
    return func(payload).then(
      (result: any) =>
        // TODO dispatch generated success and failure actions???
        dispatch({
          payload,
          result,
          type: types.SUCCESS
        }),
      (error: any) =>
        dispatch({
          payload,
          error,
          type: types.FAILURE
        })
    );
  };
  