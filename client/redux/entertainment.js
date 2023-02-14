import axios from "axios";

// action type
const GET_ENTERTAINMENT = "GET_ENTERTAINMENT";

// action creators
const entertainmentActionCreator = (entertainment) => {
  return {
    type: GET_ENTERTAINMENT,
    entertainment,
  };
};

//thunk
export const fetchEntertainment = (requestInfo) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/api/musicians", requestInfo);
      const businessArray = data.data.search.business;
      dispatch(entertainmentActionCreator(businessArray));
    } catch (error) {
      console.error(error);
    }
  };
};


export const entertainmentReducer = (initialState = [], action) => {
  switch (action.type) {
    case GET_ENTERTAINMENT:
      return action.entertainment;
    default:
      return initialState;
  }
};
