import { useRouter } from 'next/navigation';

export default function MealDetailsPage({ params }) {
  const { someName } = params;

  return <h1>Meal Details for {someName}</h1>;
}