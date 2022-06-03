import React from 'react';
import { addItemParaType, CartContextType } from '../components/types/types';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: addItemParaType) => {},
  removeItem: (id: string) => {},
  clearCart: () => {},
} as CartContextType);

export default CartContext;
