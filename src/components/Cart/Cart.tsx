import { FC } from 'react';
import Modal from '../UI/Modal';

import s from './Cart.module.css';

type Props = {
  onShowCart: () => void;
};

const Cart: FC<Props> = props => {
  const cartItems = (
    <ul className={s['cart-items']}>
      {[
        {
          id: 'c1',
          name: 'sushi',
          amount: '2',
          price: 12.99,
        },
      ].map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onShowCart}>
      {cartItems}
      <div className={s.total}>
        <span>Total Amount</span>
        <span>53.52</span>
      </div>
      <div className={s.actions}>
        <button className={s['button--alt']} onClick={props.onShowCart}>
          Close
        </button>
        <button className={s.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
