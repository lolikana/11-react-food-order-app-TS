import React, { FC, useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

import s from './HeaderCartButton.module.css';

const HeaderCartButton: FC<{ onClick: () => void }> = props => {
  const [btnIsHigh, setBtnIsHigh] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${s.button} ${btnIsHigh ? s.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHigh(true);

    const timer = setTimeout(() => {
      setBtnIsHigh(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={s.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={s.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
