import { useContext } from 'react';
import { FC } from 'react';
import CartContext from '../../store/cart-context';
import { addItemParaType } from '../types/types';
import Modal from '../UI/Modal';

import s from './Cart.module.css';
import CartItem from './CartItem';

type Props = {
  onShowCart: () => void;
};

const Cart: FC<Props> = props => {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx.items);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item: addItemParaType) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={s['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onShowCart}>
      {cartItems}
      <div className={s.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={s.actions}>
        <button className={s['button--alt']} onClick={props.onShowCart}>
          Close
        </button>
        {hasItem && <button className={s.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
