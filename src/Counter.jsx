import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './redux/ducks//counter'

const Counter = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}
 
export default Counter;