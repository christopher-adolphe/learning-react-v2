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

  redirect('/meals');
}
