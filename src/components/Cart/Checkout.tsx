import React, { FC, FormEvent, useRef, useState } from 'react';
import { customerInfoType } from '../types/types';

import s from './Checkout.module.css';

type Props = {
  onCancel: () => void;
};

const isEmpty = (value: string) => value.trim() === '';
const isNotFiveChars = (value: string) => value.trim().length !== 5;

const Checkout: FC<Props> = props => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const confirmHandler = (event: FormEvent) => {
    event.preventDefault();

    const customerInfo = {
      name: nameInputRef.current?.value,
      street: streetInputRef.current?.value,
      postal: postalInputRef.current?.value,
      city: cityInputRef.current?.value,
    } as customerInfoType;

    const enteredNameIsValid = !isEmpty(customerInfo.name);
    const enteredStreetIsValid = !isEmpty(customerInfo.street);
    const enteredPostalIsValid = !isNotFiveChars(customerInfo.postal);
    const enteredCityIsValid = !isEmpty(customerInfo.city);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }
  };

  return (
    <form onSubmit={confirmHandler} className={s.form}>
      <div className={`${s.control} ${formInputValidity.name ? '' : s.invalid}`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={`${s.control} ${formInputValidity.street ? '' : s.invalid}`}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={`${s.control} ${formInputValidity.postal ? '' : s.invalid}`}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputValidity.postal && <p>Please enter a valid postal!</p>}
      </div>
      <div className={`${s.control} ${formInputValidity.city ? '' : s.invalid}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={s.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={s.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
