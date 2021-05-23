import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";
import CreateTask from "./components/CreateTask";
import CreateCourse from "./components/CreateCourse";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Route exact path="/" component={TaskList} />
      <Route path="/edit/:id" component={EditTask} />
      <Route path="/create" component={CreateTask} />
      <Route path="/course" component={CreateCourse} />
    </BrowserRouter>
  );
}

export default App;