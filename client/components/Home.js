import React, { useEffect, useState } from "react";
import ReviewsHome from "./ReviewsHome";
import CarouselHome from "./CarouselHome";
import FlexBox from "./Styled-Components/FlexBox.styled";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Home = () => {
  window.localStorage.removeItem("price");
  window.localStorage.removeItem("term");

  return (
    <div id="home-div">
      <br></br>
      <CarouselHome />
      <div>
        <div>
          <FlexBox>
            <br></br>
            <br></br>
            <h2 className="home-tagline what-we-do">
              <strong>
                Have a party coming up? Need venue, catering, or entertainment
                recommendations in your area? Click Start Planning to find
                recommendations in your area.
              </strong>
            </h2>
            <br></br>
            <br></br>
            <h3>Reviews</h3>
            <br></br>
            <FlexBox>
              <ReviewsHome />
            </FlexBox>
          </FlexBox>
        </div>
      </div>
    </div>
  );
};

export default Home;
