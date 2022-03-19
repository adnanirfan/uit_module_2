import {
  // BrowserRouter as Router,
  // Link,
  // Redirect,
  Route,
  Switch,
} from "react-router-dom";
import List from "../List/List";
import Home from "../Home";
import UserDetail from "../UserDetail";

const MyRouter = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
        {/* <Redirect to="/" /> */}
      </Route>
      <Route path="/users_list">
        <List />
      </Route>
      <Route path="/user_detail/:i">
        <UserDetail />
      </Route>
      <Route path="/login">
        {() => <h1>Login</h1>}
      </Route>
      <Route path="/register">
        {() => <h1>Register</h1>}
      </Route>
      <Route path="/*">
        <h1>404 Not FOUND!</h1>
      </Route>
    </Switch>
  );
};

export default MyRouter;
