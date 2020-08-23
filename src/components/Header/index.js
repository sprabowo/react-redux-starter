import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to="/">Home</Link>&nbsp;
      <Link to="/dashboard">Dashboard</Link>&nbsp;
      <Link to="/youcantfindthispage">Not Found</Link>
    </>
  )
};

export default Header;