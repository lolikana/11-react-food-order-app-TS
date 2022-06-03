import React, { FC, FormEvent } from 'react';
import useInput from '../../hooks/use-Input';

import s from './Checkout.module.css';

type Props = {
  onCancel: () => void;
  onConfirm: (data: {}) => void;
  toDisabledBtn: boolean;
};

const CheckoutReducer: FC<Props> = props => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    inputClasse: nameInputClasse,
    inputChangeHandler: inputNameHandler,
    inputBlurHandler: inputNameBlurHandler,
    reset: resetName,
  } = useInput((value: string) => value.trim() !== '');
  const {
    value: enteredStreet,
    isValid: streetIsValid,
    hasError: streetInputHasError,
    inputClasse: streetInputClasse,
    inputChangeHandler: inputStreetHandler,
    inputBlurHandler: inputStreetBlurHandler,
    reset: resetStreet,
  } = useInput((value: string) => value.trim() !== '');

  const {
    value: enteredPostal,
    isValid: postalIsValid,
    hasError: postalInputHasError,
    inputClasse: postalInputClasse,
    inputChangeHandler: inputPostalHandler,
    inputBlurHandler: inputPostalBlurHandler,
    reset: resetPostal,
  } = useInput((value: string) => /\d{3}-\d{4}/.test(value));
  const {
    value: enteredCity,
    isValid: cityIsValid,
    hasError: cityInputHasError,
    inputClasse: cityInputClasse,
    inputChangeHandler: inputCityHandler,
    inputBlurHandler: inputCityBlurHandler,
    reset: resetCity,
  } = useInput((value: string) => value.trim() !== '');

  let formIsValid = false;
  formIsValid = nameIsValid && streetIsValid && postalIsValid && cityIsValid;

  const confirmHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetName();
    resetStreet();
    resetPostal();
    resetCity();

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  return (
    <form onSubmit={confirmHandler} className={s.form}>
      <div className={nameInputClasse}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={inputNameHandler}
          onBlur={inputNameBlurHandler}
        />
        {nameInputHasError && (
          <p className={s['error-msg']}>Please enter a valid name!</p>
        )}
      </div>
      <div className={streetInputClasse}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={enteredStreet}
          onChange={inputStreetHandler}
          onBlur={inputStreetBlurHandler}
        />
        {streetInputHasError && (
          <p className={s['error-msg']}>Please enter a valid street!</p>
        )}
      </div>
      <div className={postalInputClasse}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={enteredPostal}
          onChange={inputPostalHandler}
          onBlur={inputPostalBlurHandler}
        />
        {postalInputHasError && (
          <p className={s['error-msg']}>Please enter a valid postal code! (000-0000)</p>
        )}
      </div>
      <div className={cityInputClasse}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={enteredCity}
          onChange={inputCityHandler}
          onBlur={inputCityBlurHandler}
        />
        {cityInputHasError && (
          <p className={s['error-msg']}>Please enter a valid city!</p>
        )}
      </div>
      <div className={s.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button disabled={!formIsValid || props.toDisabledBtn} className={s.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CheckoutReducer;
