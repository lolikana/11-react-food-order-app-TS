import { Fragment, useContext, useState } from 'react';
import { FC } from 'react';
import CartContext from '../../store/cart-context';
import { addItemParaType } from '../types/types';
import LoadingSpinner from '../UI/Loading';
import Modal from '../UI/Modal';

import s from './Cart.module.css';
import CartItem from './CartItem';
// import Checkout from './Checkout';
import CheckoutReducer from './Checkout-reducer';

type Props = {
  onShowCart: () => void;
};

const Cart: FC<Props> = props => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmintting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item: addItemParaType) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (customerData: {}) => {
    setIsSubmintting(true);
    await fetch('https://food-order-app-c6cac-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: customerData,
        orderedItems: cartCtx.items,
      }),
    });
    setIsSubmintting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const modalAction = (
    <div className={s.actions}>
      <button className={s['button--alt']} onClick={props.onShowCart}>
        Close
      </button>
      {hasItem && (
        <button className={s.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

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

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={s.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {/* {isCheckout && <Checkout onCancel={props.onShowCart} />} */}
      {isCheckout && hasItem && (
        <CheckoutReducer
          onConfirm={submitOrderHandler}
          onCancel={props.onShowCart}
          toDisabledBtn={hasItem ? false : true}
        />
      )}
      {!isCheckout && modalAction}
    </Fragment>
  );

  const isSubmittingModalContent = <LoadingSpinner content="Sending order data..." />;
  const didSubmittingModalContent = (
    <Fragment>
      <p>Successfully sent the order!</p>
      <div className={s.actions}>
        <button className={s.button} onClick={props.onShowCart}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal onClick={props.onShowCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmittingModalContent}
    </Modal>
  );
};

export default Cart;
