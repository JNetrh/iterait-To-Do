export const initialState = {
  __typename: "AppState",
  unfinishedToDos: [1, 2, 3],
  finishedTodos: []
};

export function createResolvers(getState, setState) {
  return {
    Mutation: {
      setUnfinishedTodos: (_, args) => {
        setState(
          {
            unfinishedToDos: args.unfinishedToDos
          },
          true
        );
      }
    }
  };
}
