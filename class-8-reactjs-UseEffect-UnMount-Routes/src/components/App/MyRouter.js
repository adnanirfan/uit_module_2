import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import List from "../List/List";
import UserDetail from "../UserDetail";

const MyRouter = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/404" />
      </Route>
      <Route path="/list">
        <List />
      </Route>
      <Route path="/user_detail">
        <UserDetail />
      </Route>
      <Route path="/404">
        <h1>404 Not FOUND!</h1>
      </Route>
    </Switch>
  );
};

export default MyRouter;
