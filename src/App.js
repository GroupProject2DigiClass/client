import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Register from "./pages/registration";
import home from "./pages/home";

import Class from "./pages/class";
<<<<<<< HEAD
import CardPage from "./pages/cardPage";
=======
>>>>>>> d0fe5176db2d12aca4194bf86cd945ee49cd78c1

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ height: "100%", width: "100%" }}>
        <main>
          <Route path="/" component={home} exact />
   
          <Route path="/home" component={login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/class" component={Class} exact />
          <Route path="/page" component={CardPage} exact />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
