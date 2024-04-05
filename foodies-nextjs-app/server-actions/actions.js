'use server';

import { redirect } from 'next/navigation';

import { saveMeal } from '@/services';

export async function handleShareMeal(formData) {
  const { name, email, title, summary, instructions, image } = Object.fromEntries(formData);
  const newMeal = {
    title,
    summary,
    instructions,
    image,
    creator: name,
    creator_email: email,
  };

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
