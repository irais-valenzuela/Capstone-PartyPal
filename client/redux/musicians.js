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
export const fetchMusiciansThunk = (requestInfo) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/api/musicians", requestInfo);
      const businessArray = data.data.search.business;
      console.log("data in all musicians thunk", businessArray);
      dispatch(allMusiciansActionCreator(businessArray));
    } catch (error) {
      console.error(error);
    }
  };
};


export const musicians = (initialState = [], action) => {
  switch (action.type) {
    case GET_ALL_MUSICIANS:
      return action.musicians;
    default:
      return initialState;
  }
};
