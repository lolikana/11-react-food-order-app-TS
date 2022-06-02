import { FormEvent, useReducer } from 'react';

import s from './../components/Cart/Checkout.module.css';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state: any, action: any) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }
  return { inputStateReducer };
};

const useInput = (checkedValidValue: any) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  const valueIsValid = checkedValidValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const inputChangeHandler = (event: FormEvent) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;

    dispatch({ type: 'INPUT', value: target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };
  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const inputClasse = hasError ? `${s.control} ${s.invalid}` : s.control;

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    inputClasse,
    inputBlurHandler,
    inputChangeHandler,
    reset,
  };
};

export default useInput;
