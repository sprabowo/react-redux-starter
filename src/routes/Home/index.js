import React from 'react';
import Layout from '../../components/Layout';
import Counter from './components/Counter'

const Home = () => {
  return (
    <>
      <Layout>
        <h1>Home page</h1>
        <p>welcome to home page</p>
        <Counter />
      </Layout>
    </>
  )
};

export default Home;