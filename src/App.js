import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Register from "./pages/registration";
import home from "./pages/home";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Route path="/" component={home} exact />
          <Route path="/register" component={Register} exact />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
