'use client';

import { useFormStatus } from 'react-dom';

export default function MealSubmitButton() {
  // Using the `useFormStatus()` hook to get
  // status information about the form submission
  // It returns a status object with a `pending`
  // property which is convenient to provide feedback
  // to the user
  // NOTE: In order for this hook to work, it must
  // be called from a component which is rendered inside
  // the form
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={ pending }>{ pending ? 'Submitting...' : 'Share Meal' }</button>
  );
}
