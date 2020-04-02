import { Link } from "react-router-dom";
import Box from "./components/Box";

import React from "react";

function Navigation() {
  return (
    <Box>
      <Link to="/">Home</Link>
      <Link to="/addtask">New</Link> <Link to="/todo/1">one</Link>
    </Box>
  );
}

export default Navigation;
