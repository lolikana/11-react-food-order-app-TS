import React, { useEffect, useState } from 'react';

import Card from '../UI/Card';
// import { DUMMY_MEALS } from './MealsDatas';
import s from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import useHttp from '../../hooks/use-htttp';
import { mealType, requestConfigType } from '../types/types';
import LoadingSpinner from '../UI/Loading';

const AvailableMeals = () => {
  const [meals, setMeals] = useState<mealType[]>([]);

  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const transformMeals = (mealsObj: any) => {
      const loadedMeals = [];

      for (const mealKey in mealsObj) {
        loadedMeals.push({
          id: mealKey,
          name: mealsObj[mealKey].name,
          description: mealsObj[mealKey].description,
          price: mealsObj[mealKey].price,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals(
      {
        url: 'https://food-order-app-c6cac-default-rtdb.firebaseio.com/meals.json',
      } as requestConfigType,
      transformMeals
    );
  }, [fetchMeals]);

  let content = <h2>No meals found</h2>;

  if (meals.length > 0) {
    content = (
      <ul>
        {meals.map((meal: mealType) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </ul>
    );
  }
  // const mealsList = DUMMY_MEALS.map(meal => (
  //   <MealItem
  //     key={meal.id}
  //     id={meal.id}
  //     name={meal.name}
  //     description={meal.description}
  //     price={meal.price}
  //   />
  // ));

  if (isLoading) {
    content = <LoadingSpinner content="Loading" />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <section className={s.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
