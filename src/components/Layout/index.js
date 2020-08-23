import React from 'react';
import { node } from 'prop-types';
import Header from '../Header';
import './index.css';

const withMaxWidth = {
  maxWidth: '500px',
  margin: '0 auto',
};

const Layout = ({ children }) => {
  return (
    <div className="app" style={withMaxWidth}>
      <Header />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;