import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "emotion-theming";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";

import apolloClient from "./apollo/client";
import ToDo from "./components/containers/Todo";
import ToDoList from "./components/containers/ToDoList";
import AddTask from "./components/containers/AddTask";
import { defaultTheme } from "./theme";

const theme = defaultTheme;

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route path="/todo/:id">
                <ToDo />
              </Route>
              <Route path="/addtask">
                <AddTask />
              </Route>
              <Route path="/">
                <ToDoList />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
