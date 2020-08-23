import React from 'react';
import { selectCounter, increment, decrement } from '../../../reducers/counter';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch()
  return (
    <>
      <button data-testid="increment-home" onClick={() => dispatch(increment())}>+</button>
          &nbsp;<span data-testid="counter-value-home">{counter}</span>&nbsp;
      <button data-testid="decrement-home" onClick={() => dispatch(decrement())}>-</button>
    </>
  )
};

export default Counter;