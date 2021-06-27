import React, { useReducer } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Register from "./pages/registration";
import home from "./pages/home";
import assignmentT from "./pages/Assignment_teacher";
import assignmentS from "./pages/Assignment_student1";
import Class from "./pages/class";
import CardPage from "./pages/cardPage";
import combineReducers from "./reducer";
import assignindividual from "./pages/individual_assignment_student";
const App = () => {
  const [state, dispatch] = useReducer(combineReducers, {});

  return (

    <BrowserRouter>
      <div style={{ height: "100%", width: "100%" }}>
        <main>
          <Route path="/" component={home} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/class" component={Class} exact />
          <Route path="/page" component={CardPage} exact />
          <Route path="/assignmentT" component={assignmentT} exact/>
          <Route path="/assignmentS" component={assignmentS} exact/> 
          <Route path="/assignmentIS/:id" component={assignindividual} /> 
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
