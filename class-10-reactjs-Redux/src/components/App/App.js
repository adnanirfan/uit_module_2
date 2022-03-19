import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import MyRouter from "./MyRouter";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users_list">Users List</Link>
            </li>
            {/* <li>
              <Link to="/user_detail/:id">User Detail</Link>
            </li> */}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        <div
          style={{
            borderWidth: 2,
            borderStyle: "dashed",
          }}
        >
          <MyRouter />
        </div>
      </div>
    </Router>
  );
}

export default App;
