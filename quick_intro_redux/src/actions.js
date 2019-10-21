export const addTodo = todoLabel => ({
  type: 'ADD_TODO',
  payload: {
    completed: false,
    todoLabel
  }
});
