import React, { useReducer } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Register from "./pages/registration";
import Home from "./pages/home";
import LecturePage from "./pages/lecturePage";
import Class from "./pages/class";
import CardPage from "./pages/cardPage";
import ChatPage from "./pages/chat";
import combineReducers from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(combineReducers, {});

  return (
    <BrowserRouter>
      <div style={{ height: "100%", width: "100%" }}>
        <main>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/class" component={Class} exact />
          <Route path="/page/:id" component={CardPage} />
          <Route path="/lecture/:id" component={LecturePage} />
          <Route path="/chat" component={ChatPage} exact />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
