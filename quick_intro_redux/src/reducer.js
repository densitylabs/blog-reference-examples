const INITIAL_STATE = {
  todos: [],
}

export default (state = INITIAL_STATE, action) => {
  console.log('action', action);
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    default:
      return state
  }
}
