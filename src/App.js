import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/Dashbord";
import StudentEnrollForm from "./components/pages/EnrollForm/StudentEnrollForm";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="web-name">
          <Link to="/">Enrollment App</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/enroll-new-student"
            component={StudentEnrollForm}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
