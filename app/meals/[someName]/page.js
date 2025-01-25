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
    <h2>Instructions</h2>
  );
}
