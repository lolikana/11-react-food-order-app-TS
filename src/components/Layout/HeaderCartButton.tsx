import React, { FC, useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

import s from './HeaderCartButton.module.css';

const HeaderCartButton: FC<{ onClick: () => void }> = props => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce(
    (currentNumber, item) => {
      return currentNumber + item;
    },
    0
  );

  return (
    <button className={`${s.button} ${s.bump}`} onClick={props.onClick}>
      <span className={s.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={s.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
