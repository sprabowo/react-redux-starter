import React from 'react';
import Layout from '../../components/Layout';
import { selectCounter } from '../../reducers/counter';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const counter = useSelector(selectCounter);
  return (
    <>
      <Layout>
        <h1>Dashboard page</h1>
        <p>only test page</p>
        <span data-testid="counter-value-dashboard">{ counter }</span>
      </Layout>
    </>
  )
};

export default Dashboard;