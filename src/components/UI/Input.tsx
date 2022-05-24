import React, { FC } from 'react';
import { InputType } from '../types/types';

import s from './Input.module.css';

const Input: FC<InputType> = props => {
  return (
    <div className={s.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
