import React, { useState, Fragment, useCallback, useMemo } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import DemoOutput from './components/DemoOutput/DemoOutput';
import DemoList from './components/DemoList/DemoList';
import Button from './components/UI/Button/Button';
import './App.css';

const App = () => {
  console.log('App Component executed!!');

  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const [ isParagraphVisible, setIsParagraphVisible ] = useState(false);
  const [ isTogglingAllowed, setIsTogglingAllowed ] = useState(false);
  const [ listTitle, setListTitle ] = useState('My List');

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  // Using the `useCallback()` hook to notify React that it should reuse
  // the `handleToggleParagraph()` function when the App component is
  // re-executed. This will prevent any child component recieving the
  // `handleToggleParagraph()` function as props to be re-executed as well
  // NOTE: The `useCallback()` hook takes an array of dependencies as its
  // 2nd argument.
  const handleToggleParagraph = useCallback(() => {
    if (isTogglingAllowed) {
      setIsParagraphVisible((prevParagraphVisible) => !prevParagraphVisible);
    }
  }, [isTogglingAllowed]);

  const handleIsTogglingAllowed = () => {
    setIsTogglingAllowed(true);
  };

  const handleChangeTitle = () => {
    setListTitle('A New Title');
  };

  const list = useMemo(() => [5, 1, 12, 8, 4], []);

  return (
    <Fragment>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>

      <section className="goals">
        {content}

        <Button onClick={ handleIsTogglingAllowed }>Allow Toggle</Button>
      </section>

      <section className="goals">
        <h2>Hi there!</h2>

        <Button onClick={ handleToggleParagraph }>Toggle Paragraph</Button>

        { isParagraphVisible ? (<p>This is a new paragraph</p>) : null }

        <DemoOutput isVisible={ false } />

        <DemoList title={ listTitle } items={ list } />

        <Button onClick={ handleChangeTitle }>Change Title</Button>
      </section>
    </Fragment>
  );
};

export default App;
