import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Register from "./pages/registration";
import home from "./pages/home";

import Class from "./pages/class";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Route path="/" component={home} exact />
   
          <Route path="/home" component={login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/class" component={Class} exact />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
