import React from "react";
import { useSelector } from "react-redux";

import Counter from "./Counter";

const App = () => {
  const count = useSelector(state => state.counter.count);
  return (
    <div style={{ textAlign: 'center', backgroundColor: "grey", padding: "40px"}}>
      <h1>hello redux!</h1>
      <h2>the count: {count}</h2>
      <Counter />
    </div>
  );
}
 
export default App;
