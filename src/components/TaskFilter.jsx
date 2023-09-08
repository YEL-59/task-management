import React from 'react';

const TaskFilter = ({ handleFilter, handleSort }) => {
  return (
    <div>
      <h2>Filter and Sort</h2>
      <label>
        Filter by Status:
        <select onChange={(e) => handleFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="in-progress">In Progress</option>
          <option value="pending">Pending</option>
        </select>
      </label>
      <label>
        Sort by:
        <select onChange={(e) => handleSort(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="dueDate">Due Date</option>
        </select>
      </label>
    </div>
  );
};

export default TaskFilter;