import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput('');
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };


  // start of to do list
  return (
    <div className="todo-container">
      <form onSubmit={addTodo}>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your task here..."
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
