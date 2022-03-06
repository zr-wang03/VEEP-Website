import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";

import HomePage from "./HomePage";
import Projects from "./Components/ProjectsPage/Projects";
import Events from "./Components/EventPage/Events";
import Team from "./Components/TeamPage/Team";

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/teams" element={<Team />} />
        </Routes>
      </div>
    )
  }
}

export default App;
