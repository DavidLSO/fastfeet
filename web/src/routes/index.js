import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";
import Deliveries from "../pages/Deliveries";
import DeliveriesForm from "../pages/Deliveries/Form";
import Deliveryman from "../pages/Deliveryman";
import DeliverymanForm from "../pages/Deliveryman/Form";
import Recipient from "../pages/Recipient";
import RecipientForm from "../pages/Recipient/Form";
import Problems from "../pages/Problems";
import SignIn from "../pages/SignIn";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/delivery" exact component={Deliveries} isPrivate />
      <Route path="/delivery/add" exact component={DeliveriesForm} isPrivate />
      <Route path="/delivery/edit" exact component={DeliveriesForm} isPrivate />

      <Route path="/deliveryman" exact component={Deliveryman} isPrivate />
      <Route
        path="/deliveryman/add"
        exact
        component={DeliverymanForm}
        isPrivate
      />
      <Route
        path="/deliveryman/edit"
        exact
        component={DeliverymanForm}
        isPrivate
      />

      <Route path="/recipient" exact component={Recipient} isPrivate />
      <Route path="/recipient/add" exact component={RecipientForm} isPrivate />
      <Route path="/recipient/edit" exact component={RecipientForm} isPrivate />

      <Route path="/problems" exact component={Problems} isPrivate />
    </Switch>
  );
}
