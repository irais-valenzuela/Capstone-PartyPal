import axios from "axios";

// action type
const GET_ALL_MUSICIANS = "GET_ALL_MUSICIANS";

// action creators
const allMusiciansActionCreator = (musicians) => {
  return {
    type: GET_ALL_MUSICIANS,
    musicians,
  };
};

//thunk
export const allMusicians = (requestInfo) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/api/musicians", requestInfo);
      console.log("data in all musicians thunk", data);
      dispatch(allMusiciansActionCreator(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const initialState = [];

export const musicians = (initialState, action) => {
  switch (action.type) {
    case GET_ALL_MUSICIANS:
      return action.musicians;
    default:
      return initialState;
  }
};
