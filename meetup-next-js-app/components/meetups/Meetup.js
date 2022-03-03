import classes from './Meetup.module.css';

function Meetup({ meetup }) {
  const { title, image, address, description } = meetup;
  return (
    <section className={ classes.detail }>
      <img src={ image } alt={ title } />
      <h2>{ title }</h2>
      <p>{ description }</p>
      <address>{ address }</address>
    </section>
  );
}

export default Meetup;