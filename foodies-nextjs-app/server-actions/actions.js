'use server';

import { redirect } from 'next/navigation';

import { saveMeal } from '@/services';
import { revalidatePath } from 'next/cache';

export async function handleShareMeal(previousState, formData) {
  const { name, email, title, summary, instructions, image } = Object.fromEntries(formData);

  if (
    isValueInvalid(title) ||
    isValueInvalid(summary) ||
    isValueInvalid(instructions) ||
    isValueInvalid(name) ||
    isValueInvalid(email) ||
    !email.includes('@') ||
    !image ||
    image.size === 0
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

  const newMeal = {
    title,
    summary,
    instructions,
    image,
    creator: name,
    creator_email: email,
  };

  await saveMeal(newMeal);

  // Using the `revalidatePath()` function from Next.js
  // to purge the cache for a specific path so that users
  // are able to see updated data. It takes a string as its
  // 1st argument which represents the path we want to
  // revalidate. A second and option argument is a string
  // which specifies if we want to revalidate either the
  // page or the layout
  revalidatePath('/meals');

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
  return !value || value.trim() === ''; 
}
