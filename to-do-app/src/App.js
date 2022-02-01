import React, { useEffect, useState } from 'react';

import config from './config.json';
import useHttp from './hooks/use-http';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchTasks = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(config.apiEndpoint);

  //     if (!response.ok) {
  //       throw new Error('Request failed!');
  //     }

  //     const data = await response.json();

  //     const loadedTasks = [];

  //     for (const taskKey in data) {
  //       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //     }

  //     const loadedTasks = Object.keys(data).map(key => ({ id: key, text: data[key].text }));

  //     setTasks(loadedTasks);
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };
  
  const [tasks, setTasks] = useState([]);
  
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();
  
  const handleAddTask = (task) => {
    setTasks((prevTasks) => [ ...prevTasks, { ...task } ]);
  };
  
  useEffect(() => {
    const handleResponseData = (data) => {
      const loadedTasks = Object.keys(data).map(key => ({ id: key, text: data[key].text }));
      
      setTasks(loadedTasks);
    };

    fetchTasks({ url: config.apiEndpoint }, handleResponseData);
  }, [fetchTasks]);

  return (
    <React.Fragment>
      <NewTask onAddTask={ handleAddTask } />
      <Tasks
        items={ tasks }
        loading={ isLoading }
        error={ error }
        onFetch={ fetchTasks }
      />
    </React.Fragment>
  );
}

export default App;
