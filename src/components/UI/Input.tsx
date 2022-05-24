import React, { FC } from 'react';
import { InputType } from '../types/types';

import s from './Input.module.css';

const Input: FC<InputType> = React.forwardRef((props, ref) => {
  return (
    <div className={s.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
