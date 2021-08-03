import React from "react";

function Task({ task, index, completeTask, removeTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button style={{ background: "red" }} onClick={() => removeTask(index)}>
        X
      </button>
      <button onClick={() => completeTask(index)}>Complete</button>
    </div>
  );
}

export default Task;

//Source: https://pusher.com/tutorials/todo-app-react-hooks/#creating-a-new-task
