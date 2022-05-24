import React, { FC, Fragment } from 'react';

import s from './Header.module.css';
import MealsImg from './../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header: FC<{ onShowCart: () => void }> = props => {
  return (
    <Fragment>
      <header className={s.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={s['main-image']}>
        <img src={MealsImg} alt="Table with lots of meals" />
      </div>
    </Fragment>
  );
};

export default Header;
