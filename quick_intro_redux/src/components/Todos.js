import React from 'react';

const Todos = ({ todos, addTodo }) => {
  let input;

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(input.value);
    input.value = '';
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>

      <ul>
        {todos.map((todo, i) =>
          <li key={i}>
            {todo.todoLabel}
          </li>
        )}
      </ul>
    </div >
  );
};

export default Todos
