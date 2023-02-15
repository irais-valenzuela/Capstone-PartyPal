import React, { useEffect } from "react";
import { fetchEntertainment } from "../redux/entertainment";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FlexBoxForAllView from "./Styled-Components/FlexBoxForAllView.styled";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

const Entertainment = (props) => {
  useEffect(() => {
    const { location, service, category } = props.startForm;
    props.getEntertainment({ location, service, category });
  }, []);
  return (
    <div>
      <br />
      <h1 style={{ textAlign: "center" }}>
        {" "}
        {props.startForm.category
          ? `${props.startForm.category} services near ${props.startForm.location}`
          : "No search results, try again"}
      </h1>
      <FlexBoxForAllView>
        {props.entertainment.map((entertainment) => {
          return (
            <div key={entertainment.id}>
              <Card style={{ width: "18rem" }} className="all-results-card">
                <Card.Img variant="top" src={entertainment.photos[0]} />
                <Card.Body>
                  <Card.Title>{entertainment.name}</Card.Title>
                  <Card.Text>{entertainment.price}</Card.Text>
                  <div>
                    <Typography component="legend">
                      <strong>Ratings: {entertainment.rating}</strong>
                    </Typography>
                    <br />
                    <Rating
                      name="read-only"
                      precision={0.5}
                      value={entertainment.rating}
                      readOnly
                    />
                  </div>
                  <br />
                  <Button variant="primary">See More</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </FlexBoxForAllView>
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
