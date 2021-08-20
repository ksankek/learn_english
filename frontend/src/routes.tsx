import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MainPage from "./pages/MainPage";
import AddWordPage from "./pages/AddWordPage";
import { MAIN_ROUTE, ADDWORD_ROUTE } from "./utils/const";

export const UseRoutes = () => {
  return (
    <Switch>
      <Route exact path={MAIN_ROUTE}>
        <MainPage></MainPage>
      </Route>
      <Route exact path={ADDWORD_ROUTE}>
        <AddWordPage></AddWordPage>
      </Route>
      <Redirect to={MAIN_ROUTE} />
    </Switch>
  );
};
