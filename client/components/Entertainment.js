import React, { useEffect } from "react";
import { fetchEntertainment } from "../redux/entertainment";
import { connect } from "react-redux";

const Entertainment = (props) => {
  console.log("props", props);
  // const handleClick = () => {
  //   console.log("in all musicians");
  //   props.getMusicians({
  //     location: "fullerton",
  //     price: "",
  //     categories: "musicians",
  //     service: "entertainment",
  //   });
  // };

  useEffect(() => {
    const { location, service, category } = props.startForm;
    const entertainment =  props.getMusicians()
  }, []);
  return (
    <div>
      {props.musicians.map((musician) => {
        return (
          <div key={musician.id}>
            <p>{musician.name}</p>
          </div>
        );
      })}

      {/* <button onClick={handleClick}>Get all Musicians</button> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    musicians: state.musicians,
    startForm: state.startFormReducer,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getEntertainment: ({ location, service, category }) => {
      return dispatch(fetchEntertainment({ location, service, category }));
    },
  };
};

export default connect(mapStateToProps, mapDispatch)(Entertainment);
