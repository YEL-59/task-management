import React, { useState } from 'react';

const TeamCreation = ({ createTeam }) => {
  const [formData, setFormData] = useState({
    teamName: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTeam(formData.teamName);
    setFormData({ teamName: '' });
  };

  return (
    <div>
      <h2>Create Team</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="teamName"
          placeholder="Team Name"
          value={formData.teamName}
          onChange={handleChange}
        />
        <button type="submit">Create Team</button>
      </form>
    </div>
  );
};

export default TeamCreation;