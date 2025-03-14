import Mealitem from './meal-item';
import classes from './meals-grid.module.css'

export default function MealsGrid({ meals }) {
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <Mealitem {...meal} />
                </li>
            ))}
        </ul>
    )
}