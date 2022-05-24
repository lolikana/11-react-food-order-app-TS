import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: string) => {},
  removeItem: (id: string) => {},
});

export default CartContext;
