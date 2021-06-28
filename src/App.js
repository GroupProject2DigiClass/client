import React, { useReducer } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Register from "./pages/registration";

import assignmentT from "./pages/Assignment_teacher";
import assignmentS from "./pages/Assignment_student1";

import Home from "./pages/home";
import LecturePage from "./pages/lecturePage";
import Class from "./pages/class";

import CardPage from "./pages/cardPage";
import ChatPage from "./pages/chat";
import combineReducers from "./reducer";
import assignindividual from "./pages/individual_assignment_student";
const App = () => {
  const [state, dispatch] = useReducer(combineReducers, {});

  return (
    <BrowserRouter>
      <div style={{ height: "100%", width: "100%" }}>
        <main>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/class" component={Class} exact />
          <Route path="/assignmentT" component={assignmentT} exact />
          <Route path="/assignmentS" component={assignmentS} exact />
          <Route path="/assignmentIS/:id" component={assignindividual} />
          <Route path="/page/:id" component={CardPage} />
          <Route path="/lecture/:id" component={LecturePage} />
          <Route path="/chat" component={ChatPage} exact />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
