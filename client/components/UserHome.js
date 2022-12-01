import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// const { username, firstName, lastName, email } = props.user;
// const { createEvent } = props;
// const [user, setUser] = useState({});

// useEffect(() => {}, [props.user]);
const UserHome = (props) => {
  console.log('props.user >>>> ', props.user);
  // user info is not found even logged in

  return (
    <div>
      <div className="user-profile">
        <div>
          <img src="" />
        </div>
        <div>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
        </div>
      </div>
      <div className="user-home-favorite">
        <h2>Favorite</h2>
        <div>Venues</div>
        <div>Catering</div>
      </div>
      <div className="user-home-events">
        <div>
          <h2>Events</h2>
          <button type="submit" onSubmit={createEvent}>
            Create Future Event
          </button>
        </div>
        <div>the latest 3 upcoming events</div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    user: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    createEvent: () => console.log('createEvent button'), // need to pass user's id when to create event
  };
};

export default connect(mapState, mapDispatch)(UserHome);
