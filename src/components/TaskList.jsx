import React from 'react';

const TaskList = ({ tasks, toggleTaskStatus, deleteTask }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span>{task.title}</span>
            <button onClick={() => toggleTaskStatus(task.id)}>
              {task.status === 'completed' ? 'Mark In Progress' : 'Mark Completed'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;