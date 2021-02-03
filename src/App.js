import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import home from "./pages/home";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Route path="/" component={home} exact />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
