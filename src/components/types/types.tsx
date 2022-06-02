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

export type mealType = {
  id: string;
  name: string;
  description: string;
  price: number;
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

export type requestConfigType = {
  url: string;
  method: string;
  body: string | null;
  headers: {};
};
export type customerInfoType = {
  name: string;
  street: string;
  postal: string;
  city: string;
};
