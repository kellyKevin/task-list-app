import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Task List App', completed: false },
    { id: 3, text: 'Practice Coding', completed: false }
  ]);

  const addTask = () => {
    const newTask = prompt('Enter a new task:');
    if (newTask) {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, completed: false }]);
    }
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Awesome Task List</h1>
      </header>
      <div className="task-container">
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              <span>{task.text}</span>
              <div>
                <button className="done-btn" onClick={() => toggleTask(task.id)}>
                  {task.completed ? "Undo" : "Done"}
                </button>
                <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="add-task">
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
    </div>
  );
}

export default App;

