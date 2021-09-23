// import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Form from "../Form";
import Welcome from "../Welcome";

export default function Display() {
  // const [client, setClient] = useState(false); desconsideradas pelo uso do Params.

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Form />
        </Route>
        <Route path="/home/:name">
          <Welcome />
        </Route>
      </Switch>
    </>
  );
}
