import React, { useState } from 'react';
import './App.css';

function ToDoApp() {

  const emojis = ['😀', '😎', '😴', '🤔', '🤩', '🥳', '🤯', '😷', '🥶'];

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="mainContainer">
      <h1 className="title">To-Do App</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Add a new task" 
          value={newTask} 
          onChange={e => setNewTask(e.target.value)}
          className="inputField"
        />
        <button type="submit" className="addButton">Add</button>
      </form>
      <ul className="taskList">
        {tasks.map((task, index) => (
          <li key={index} className="taskItem">
            <span className="taskText">{emojis[Math.floor(Math.random() * emojis.length)]}{task}</span>
            <button onClick={() => handleDelete(index)} className="deleteButton">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
