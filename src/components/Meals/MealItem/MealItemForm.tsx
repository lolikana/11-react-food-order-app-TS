import React, { FC, FormEvent, useRef } from 'react';
import Input from '../../UI/Input';

import s from './MealItemForm.module.css';

const MealItemForm: FC<{ id: string }> = props => {
  const amountInputRef = useRef();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value; // value is always a string
    const enteredAmountNumber = +enteredAmount; 
  };

  return (
    <form className={s.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
