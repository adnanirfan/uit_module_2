import {
  BrowserRouter as Router1,
  HashRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import List from "../List/List";
import UserDetail from "../UserDetail";
import "./App.css";
import MyRouter from "./MyRouter";

function App() {
  // const [isList, setIsList] = useState(true);

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/user_detail">User Detail</Link>
            </li>
          </ul>
        </nav>

        <div
          style={{
            /* border: "2px solid black" */ borderWidth: 2,
            borderStyle: "dashed",
          }}
        >
          <MyRouter />
        </div>

        {/* <div>
          <button
            onClick={() => {
              setIsList(!isList);
            }}
          >
            Toggle View
          </button>
        </div>
        {isList && <List />}

        {!isList && <UserDetail />} */}
      </div>
    </Router>
  );
}

export default App;
