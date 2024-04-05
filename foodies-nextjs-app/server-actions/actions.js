'use server';

import { redirect } from 'next/navigation';

import { saveMeal } from '@/services';

export async function handleShareMeal(previousState, formData) {
  const { name, email, title, summary, instructions, image } = Object.fromEntries(formData);
  const newMeal = {
    title,
    summary,
    instructions,
    image,
    creator: name,
    creator_email: email,
  };

  if (
    isValueInvalid(newMeal.title) ||
    isValueInvalid(newMeal.summary) ||
    isValueInvalid(newMeal.instructions) ||
    isValueInvalid(newMeal.name) ||
    isValueInvalid(newMeal.emal) ||
    !newMeal.emal.includes('@') ||
    !newMeal.image ||
    newMeal.image.size === 0
  ) {
    // throw new Error('Input for new meal are invalid');

    // A more elegant feedback for input validation is
    // return a response from the server action that can
    // then be used on the client-side with the help of
    // the `useFormState()` hook
    return {
      message: 'Input for new meal are invalid',
    };
  }

  await saveMeal(newMeal);

  // Using the `redirect()` function from Next.js to
  // redirect the user to another page by specifying
  // the path as an argument.
  // NOTE: When `redirect()` is called, it actually
  // throws a 303 error. Therefore it is advised to
  // always invoke it after any `try/catch` block
  // instead of inside else the redirection won't
  // work as control will move to the `catch` block
  // because of the 303 error being thrown
  redirect('/meals');
}

function isValueInvalid(value) {
  return value || value.trim() === ''; 
}
