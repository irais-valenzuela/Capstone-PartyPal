import React, { useEffect } from "react";
import { fetchMusiciansThunk } from "../redux/musicians";
import { connect } from "react-redux";

const AllMusicians = (props) => {
  console.log("props", props);
  const handleClick = () => {
    console.log("in all musicians");
    props.getMusicians({
      location: "fullerton",
      price: "",
      categories: "musicians",
      service: "entertainment",
    });
  };

  useEffect(() => {
  //  const {location, service} = props.startForm
    props.getMusicians()
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

      <button onClick={handleClick}>Get all Musicians</button>
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
    getMusicians: ({ location, price, categories, service }) => {
      return dispatch(
        fetchMusiciansThunk({ location, price, categories, service })
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatch)(AllMusicians);
