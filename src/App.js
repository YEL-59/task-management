import React, { useEffect, useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import TaskCreation from './components/TaskCreation';
import TaskList from './components/TaskList';
import TeamList from './components/TeamList';
import TeamCreation from './components/TeamCreation';
import TaskFilter from './components/TaskFilter';
import firebase from 'firebase/compat/app';

const App = () => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [teams, setTeams] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortType, setSortType] = useState('priority');
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const handleToggleForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };
  const handleAuthStateChanged = (authUser) => {
    if (authUser) {
      setUser(authUser);
      setIsLoginFormVisible(false);
    } else {
      setUser(null);
      setIsLoginFormVisible(true);
    }
  };
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleAuthStateChanged);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);


  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task, status: 'pending' }]);
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task => (
      task.id === taskId ? { ...task, status: task.status === 'completed' ? 'in-progress' : 'completed' } : task
    )));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const createTeam = (teamName) => {
    setTeams([...teams, { id: Date.now(), name: teamName }]);
  };

  const joinTeam = (teamId) => {
    setTeams(teams.map(team => (
      team.id === teamId ? { ...team, members: [...team.members, user.uid] } : team
    )));
  }




  const filteredTasks = tasks.filter(task => {
    if (filterStatus === 'all') return true;
    return task.status === filterStatus;
  });

  const handleFilter = (status) => {
    setFilterStatus(status);
  };

  const handleSort = (type) => {
    setSortType(type);
  };

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortType === 'priority') {
      return a.priority.localeCompare(b.priority);
    } else {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
  });

  return (
    <div className="App">
         {user ? (
        <Profile user={user} />
      ) : isLoginFormVisible ? (
        <Login toggleForm={handleToggleForm} />
      ) : (
        <Signup toggleForm={handleToggleForm} />
      )}
      {/* {!user && <Signup />} */}
      {/* {!user && <Login />} */}
      {/* {user && <Profile user={user} />} */}
      {user && <TaskCreation addTask={addTask} />}
      {user && <TaskList tasks={tasks} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask} />}

      {user && <TeamCreation createTeam={createTeam} />}
      {user && <TeamList teams={teams} joinTeam={joinTeam} />}

      {user && <TaskFilter handleFilter={handleFilter} handleSort={handleSort} />}
      {user && <TaskList tasks={sortedTasks} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask} />}
    </div>
  );
};

export default App;