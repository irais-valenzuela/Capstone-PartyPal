import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux';

export const Navbar = ({ handleLogout, isLoggedIn }) => {
  // isLoggedIn is undefined even hard code it
  return (
    <div>
      <nav>
        <Link style={{ textDecoration: 'none' }} to="/">
          <h1 id="website-name">PartyPal</h1>
        </Link>
        <ul style={{ listStyle: 'none', textDecoration: 'none' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <a href="/" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const mapState = (state) => {
  console.log('navbar state', state);
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleLogout: () => dispatch(logout()),
  };
};

export default connect(mapState, mapDispatch)(Navbar);
