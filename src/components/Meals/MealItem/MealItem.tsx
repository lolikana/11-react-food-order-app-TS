import React, { FC } from 'react';
import { MealItemType } from '../../types/types';
import MealItemForm from './MealItemForm';

import s from './MealItem.module.css';

const MealItem: FC<MealItemType> = props => {
  const { id, price, name, description } = props;

  const priceFixed = `$${price.toFixed(2)}`;

  return (
    <li className={s.meal}>
      <div>
        <h3>{name}</h3>
        <div className={s.description}>{description}</div>
        <div className={s.price}>{priceFixed}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
