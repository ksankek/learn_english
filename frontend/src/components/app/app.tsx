import React from "react";
import "materialize-css";
import { BrowserRouter } from "react-router-dom";

import { UseRoutes } from "../../routes";
import NavBar from "../NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <UseRoutes />
    </BrowserRouter>
  );
}

export default App;
