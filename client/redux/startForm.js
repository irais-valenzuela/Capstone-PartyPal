const SEND_INITIAL_QUERY = "SEND_INITIAL_QUERY";

export const _sendInitialQuery = (initialQuery) => ({
  type: SEND_INITIAL_QUERY,
  initialQuery,
});

export const sendInitialQuery = (initialQuery, history) => {
  console.log("inital query", initialQuery.service);
  return async (dispatch) => {
    try {
      const { service } = initialQuery;
      dispatch(_sendInitialQuery(initialQuery));
      service === "catering"
        ? history.push("/allCaterers")
        : service === "venue"
        ? history.push("/allVenues")
        : history.push("/allMusicians");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

const startFormReducer = (state = {}, action) => {
  switch (action.type) {
    case SEND_INITIAL_QUERY:
      return action.initialQuery;
    default:
      return state;
  }
};

export default startFormReducer;
