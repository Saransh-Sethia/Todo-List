import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let id = 0;
  const taskList = [
    {
      id: id++,
      label: "Play Cricket"
    },
    {
      id: id++,
      label: "Do Yoga"
    },
    {
      id: id++,
      label: "Wash Clothes"
    },
    {
      id: id++,
      label: "Water Plants"
    },
    {
      id: id++,
      label: "Go to market"
    },
  ];

  const [tasks, setTasks] = useState(taskList);
  const [newTask, setNewTask] = useState("");
  return (
    <div className="App">
      <div>
        <h1>Todo List</h1>
      </div>
<div>
      <input
      type="text"
      placeholder='Enter a Todo'
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      />
      <button
      onClick={() => {setTasks(tasks.concat({
          id: id++,
          label: newTask.trim(),
        }),);
        setNewTask("")
      }}>Submit</button>
      </div>
<div>
  <ul>
    {
      tasks.map(({id, label}) => (
        <li key={id}>
          <h4>{label}</h4>
          <button
          onClick={()=>setTasks(tasks.filter((task) => task.id !== id))}>Delete</button>
        </li>
      ))
    }
  </ul>
</div>
    </div>
  );
}

export default App;
