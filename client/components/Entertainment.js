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
    props.getEntertainment({location, service, category})
  }, []);
  return (
    <div>
      {props.entertainment.map((entertainment) => {
        return (
          <div key={entertainment.id}>
            <p>{entertainment.name}</p>
          </div>
        );
      })}

      {/* <button onClick={handleClick}>Get all Musicians</button> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    entertainment: state.entertainmentReducer,
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
