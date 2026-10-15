import {use} from "react";

export default function MealDetailsPage(props) {
  const params = use(props.params);

  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Meal Details
      </h1>
      <p>{params.mealSlug}</p>
    </main>
  );
}
