export type MealItemType = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export type InputType = {
  label: string;
  input: {
    id: string;
    type: string;
    min: string;
    max: string;
    step: string;
    defaultValue: string;
  };
};

export type CartContextType = {
  items: {}[];
  totalAmount: number;
  addItem: () => void;
  removeItem: () => void;
};