import React, { useState } from "react";
import Task from "./Task";

const taskList = [
  {
    title: "Grab some Pizza",
    completed: true,
  },
  {
    title: "Do your workout",
    completed: true,
  },
  {
    title: "Hangout with friends",
    completed: false,
  },
];

function Todolist() {
  const [tasks, setTasks] = useState(taskList);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const removeTasks = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <div>
        {tasks.map((task, index) => (
          <Task
            task={task}
            key={index}
            index={index}
            completeTask={completeTask}
            removeTask={removeTasks}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Add a new todo"
          onChange={handleChange}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Todolist;
