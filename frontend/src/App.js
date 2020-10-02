import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//components
import CreateTask from "./components/create-task";
import ListTask from "./components/list-task";
import EditTask from "./components/edit-task";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route path="/" exact component={ListTask} />
        <Route path="/create" component={CreateTask} />
        <Route path="/edit/:id" component={EditTask} />
      </div>
    </Router>
  );
}

export default App;
