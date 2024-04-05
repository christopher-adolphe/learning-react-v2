import { handleShareMeal } from '@/server-actions';

import { ImagePicker, MealSubmitButton } from '@/components/Meals';

import styles from './page.module.css';

export default function ShareMeal() {
  // Defining a server action for Next.js to invoke
  // when the form is submitted. A server action is
  // always executed on the server. Behind the scenes
  // Next.js sends a request to the server hosting our
  // application and on that server, the server action
  // is invoked. Server actions implicitly receive the
  // formData object.
  // In order for Next.js to be able to identify a function
  // as server action, we need to add the `use server`
  // directive in the function's body
  // To be albe to use server actions with client components,
  // the server actions should be exported from a different
  // module with the `use server` directive at top level
  // instead of being in the function body

  // Example of an embedded server action
  // async function handleShareMeal(formData) {
  //   'use server';

  //   const { name, email, title, summary, instructions, image } = Object.fromEntries(formData);
  //   const newMeal = {
  //     title,
  //     summary,
  //     instructions,
  //     image,
  //     creator: name,
  //     creator_email: email,
  //   };

  //   console.log('newMeal: ', newMeal);
  // }

  return (
    <>
      <header className={ styles.header }>
        <h1>Share your <span className={ styles.highlight }>favorite meal</span></h1>

        <p>Or any other meal you feel needs sharing!</p>
      </header>

      <main className={ styles.main }>
        <form className={ styles.form } action={ handleShareMeal }>
          <div className={ styles.row }>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>

            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>

          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>

          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>

          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>

          <ImagePicker label="Meal picture" name="image" />

          <p className={ styles.actions }>
            <MealSubmitButton />
          </p>
        </form>
      </main>
    </>
  );
}
