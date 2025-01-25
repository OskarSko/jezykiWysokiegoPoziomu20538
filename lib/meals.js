import sql from 'better-sqlite3';

const db = sql('meals.db');
export function getMeal(someName) {
    return db.prepare('Select * FROM meals WHERE slug = ?').get(someName)
}
export async function getMeals() {
    await new Promise ((resolve) => setTimeout(resolve,2000));
    return db.prepare('SELECT * FROM meals').all();
}