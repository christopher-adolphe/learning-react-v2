import config from '../../config.json';
import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const handleSubmitTask = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       config.apiEndpoint,
  //       {
  //         method: 'POST',
  //         body: JSON.stringify({ text: taskText }),
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error('Request failed!');
  //     }

  //     const data = await response.json();

  //     const generatedId = data.name; // firebase-specific => "name" contains generated id
  //     const createdTask = { id: generatedId, text: taskText };

  //     props.onAddTask(createdTask);
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };

  const { isLoading, error, sendRequest: postTask } = useHttp();

  const handleResponseData = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const handleSubmitTask = (taskText) => {
    postTask({
      url: config.apiEndpoint,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { text: taskText } 
    }, handleResponseData.bind(null, taskText))
  };

  return (
    <Section>
      <TaskForm onSubmitTask={ handleSubmitTask } loading={ isLoading } />
      { error && <p>{ error }</p> }
    </Section>
  );
};

export default NewTask;
