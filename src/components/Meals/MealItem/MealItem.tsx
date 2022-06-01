import { FC, useContext } from 'react';
import { addItemParaType, MealItemType } from '../../types/types';
import MealItemForm from './MealItemForm';

import s from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem: FC<MealItemType> = props => {
  const { id, price, name, description } = props;
  const cartCtx = useContext(CartContext);

  const priceFixed = `$${price.toFixed(2)}`;

  const AddToCartHandler = (amount: number) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    } as addItemParaType);
  };

  return (
    <li className={s.meal}>
      <div>
        <h3>{name}</h3>
        <div className={s.description}>{description}</div>
        <div className={s.price}>{priceFixed}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={AddToCartHandler} id={id} />
      </div>
    </li>
  );
};

export default MealItem;
