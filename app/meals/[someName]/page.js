import { getMeal } from '@/lib/meals.js';
import classes from './page.module.css';

export default async function MealDetailsPage({ params }) {
  const { someName } = params;
  return(
    <main>
        <h1>Meal details for {someName}</h1>
    </main>
  );
}