import React from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Success } from "../pages/Success";
import { useState } from "react";

export const Routes = () => {
  const [user, setUser] = useState("");

  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Home setUser={setUser} />
        </Route>
        <Route>
          <Success user={user} exact path="/success/:name" />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};
