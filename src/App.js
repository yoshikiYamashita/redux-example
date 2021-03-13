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
      <p>redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.</p>
      { user === undefined && <h1>Now Loading...</h1>}
      { user === false && <h1>Error, fetch failed</h1>}
      { user && <h1>Welcom, {user.firstname}</h1>}
    </div>
  );
}
 
export default App;
