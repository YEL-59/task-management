import React from 'react';

const TeamList = ({ teams, joinTeam }) => {
  return (
    <div>
      <h2>Team List</h2>
      <ul>
        {teams.map(team => (
          <li key={team.id}>
            <span>{team.name}</span>
            <button onClick={() => joinTeam(team.id)}>Join Team</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;