import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import AddTask from "../modules/AddTask";

import gql from "graphql-tag";
import Box from "../Box";

const APP_STATE_QUERY = gql`
  query AppState {
    appState @client {
      unfinishedToDos
    }
  }
`;

const SET_UNFINISHED_TODOS = gql`
  mutation SetUnfinishedTodos($unfinishedTodos: [Task]) {
    SetUnfinishedTodos(unfinishedTodos: $unfinishedTodo) @client
  }
`;

function AddTaskContainer() {
  const { data: appStateData } = useQuery(APP_STATE_QUERY, {
    fetchPolicy: "cache-only"
  });
  const [setunfinishedTodos] = useMutation(SET_UNFINISHED_TODOS);

  function setNewTask(task) {
    setunfinishedTodos(task);
  }

  return (
    <Box width="100%">
      <AddTask
        unfinishedTasks={appStateData.unfinishedTasks}
        setNewTask={setNewTask}
      ></AddTask>
    </Box>
  );
}

export default AddTaskContainer;
