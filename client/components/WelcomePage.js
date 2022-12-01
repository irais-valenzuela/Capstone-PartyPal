import AllCaterer from './AllCaterer';
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Login, Signup } from './Auth';
import EventSummary from './EventSummary';
import UserHome from './UserHome';
import { Navbar } from './NavBar';
import AllVenues from './AllVenues';

const WelcomePage = (props) => {
  return (
    <div>
      {/* <Navbar /> */}
      <p>Hello!</p>
    </div>
  );
};

export const AllRoutes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/caterer" element={<AllCaterer />} />
            <Route path="/eventSummary" element={<EventSummary />} />
            <Route path="/my-account" element={<UserHome />} />
            <Route path="/allVenues" element={<AllVenues />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default AllRoutes;
