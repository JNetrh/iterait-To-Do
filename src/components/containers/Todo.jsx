import React from "react";
import ToDo from "../modules/ToDo";

import { useParams } from "react-router-dom";

function ToDoContainer() {
  const params = useParams();

  return <ToDo id={params.id} />;
}

export default ToDoContainer;
