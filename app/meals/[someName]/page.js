export default async function MealDetailsPage({ params }) {
    const { someName } = await params
  return(
    <main>
        <h1>Meal details for {someName}</h1>
    </main>
  );
}