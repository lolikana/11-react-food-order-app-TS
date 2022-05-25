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

export type addItemParaType = {
  id: string;
  name: string;
  amount: number;
  price: number;
  onRemove: () => void;
  onAdd: () => void;
};

export type CartContextType = {
  items: any[];
  totalAmount: number;
  addItem: (item: addItemParaType) => void;
  removeItem: (id: string) => void;
};
