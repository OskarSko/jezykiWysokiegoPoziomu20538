import { getMeal } from '@/lib/meals.js';
import classes from './page.module.css';

export default async function MealDetailsPage({ params }) {
  const { someName } = await params;
  const meal = getMeal(someName);

  if (!meal) {
    return (
      <main>
        <div className={classes.loading}>Loading meal details...</div>
      </main>
    );
  }

  return (
    <main className={classes.main}>
      <header className={classes.header}>
        <div className={classes.image}>
          <img src={meal.image} alt={meal.name} />
        </div>
        <div className={classes.headerText}>
          <h1 className={classes.title}>{meal.name}</h1>
          <div className={classes.creator}>
            Created by{' '}
            <a href="#" className={classes.link}>
              {meal.creator}
            </a>
          </div>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <section className={classes.instructions}>
        <h2>Instructions</h2>
        <p>{meal.instructions}</p>
      </section>
    </main>
  );
}
