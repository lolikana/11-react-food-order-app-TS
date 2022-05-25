import React, { FC } from 'react';
import { addItemParaType } from '../types/types';

import s from './CartItem.module.css';

const CartItem: FC<addItemParaType> = props => {
    const price = `$${props.price.toFixed(2)}`

  return (
    <li className={s['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={s.summary}>
          <span className={s.price}>{price}</span>
          <span className={s.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={s.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
