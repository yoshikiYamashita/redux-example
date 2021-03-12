import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUser } from "./redux/ducks/user";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);

  return (
    <div style={{ textAlign: 'center', backgroundColor: "grey", padding: "40px"}}>
      <h1>Redux-Saga</h1>
      <p>Redux-Saga manages async requests such as data fetching</p>
      { user === undefined && <h1>Now Loading...</h1>}
      { user === false && <h1>Error, fetch failed</h1> }
      { user && <h1>Welcom, {user.firstname}</h1>}
    </div>
  );
}
 
export default App;
